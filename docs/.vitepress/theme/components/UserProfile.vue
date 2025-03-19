<script setup>
import { ref, onMounted } from 'vue'
import { getCurrentUser, signOut } from '../../supabase'

const user = ref(null)
const loading = ref(true)
const error = ref(null)

const emit = defineEmits(['logout'])

onMounted(async () => {
  try {
    loading.value = true
    user.value = await getCurrentUser()
  } catch (err) {
    console.error('Error in UserProfile:', err)
    error.value = err.message || 'Error loading user profile'
  } finally {
    loading.value = false
  }
})

async function handleLogout() {
  try {
    const { error: logoutError } = await signOut()
    if (logoutError) {
      console.error('Logout error:', logoutError)
      error.value = logoutError.message
    } else {
      user.value = null
      emit('logout')
    }
  } catch (err) {
    console.error('Error during logout:', err)
    error.value = err.message || 'Error during logout'
  }
}
</script>

<template>
  <div class="user-profile">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else-if="user" class="profile-info">
      <div class="user-info">
        <div class="avatar" v-if="user.user_metadata && user.user_metadata.avatar_url">
          <img :src="user.user_metadata.avatar_url" alt="User avatar">
        </div>
        <div class="details">
          <h3>{{ user.user_metadata && user.user_metadata.full_name ? user.user_metadata.full_name : user.email }}</h3>
          <p class="email">{{ user.email }}</p>
        </div>
      </div>
      
      <button @click="handleLogout" class="logout-button">
        Logout
      </button>
    </div>
    
    <div v-else class="not-logged-in">
      <p>You are not logged in.</p>
      <slot name="login-actions"></slot>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.loading, .error {
  padding: 10px;
  text-align: center;
}

.error {
  color: #e74c3c;
}

.profile-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.email {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.logout-button {
  padding: 8px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.logout-button:hover {
  background-color: #e5e5e5;
}

.not-logged-in {
  text-align: center;
}
</style> 