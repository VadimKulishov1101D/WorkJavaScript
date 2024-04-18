class UserProfileManager {
    constructor() {
      this.users = [];
    }
    static generateId() {
      return 'user_' + Math.floor(Math.random() * 10000);
    }
  
    addUser(userInfo) {
      const user = {
        id: UserProfileManager.generateId(),
        name: userInfo.name,
        email: userInfo.email,
      };
  
      this.users.push(user);
    }
    removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
    updateUser(userId, newInfo) {
      const index = this.users.findIndex(user => user.id === userId);
      if (index !== -1) {
        this.users[index] = {
          id: userId,
          ...newInfo,
        };
      }
    }
  
    findUserByName(name) {
      return this.users.filter(user => user.name.includes(name));
    }
  
    getAllUsers() {
      return this.users;
    }
  }

const profileManager = new UserProfileManager();
profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" }); 
console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob  
profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob  
console.log(profileManager.findUserByName("Ali")); // Находит Alicia