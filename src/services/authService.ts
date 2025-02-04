interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photoUrl?: string;
  phone?: string;
  bio?: string;
}

export const authService = {
  register(userData: Omit<User, 'id'>) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.some((user: User) => user.email === userData.email)) {
      throw new Error('User already exists');
    }

    // Create new user
    const newUser = {
      ...userData,
      id: Date.now().toString()
    };

    // Save to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Save current user session
    const { password, ...userWithoutPassword } = newUser;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  },

  login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Save current user session
    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  },

  logout() {
    localStorage.removeItem('currentUser');
  },

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },

  updateUser(userData: Partial<User>) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = this.getCurrentUser();
    
    if (!currentUser) {
      throw new Error('No user logged in');
    }

    // Update users array
    const userIndex = users.findIndex((u: User) => u.id === currentUser.id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const updatedUser = {
      ...users[userIndex],
      ...userData,
    };

    users[userIndex] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));

    // Update current user session
    const { password, ...userWithoutPassword } = updatedUser;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));

    return userWithoutPassword;
  }
}; 