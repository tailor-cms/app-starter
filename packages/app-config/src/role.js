const role = {
  user: {
    ADMIN: 'ADMIN',
    INTEGRATION: 'INTEGRATION',
    USER: 'USER',
  },
};

export const user = role.user;

export const getRoleValues = (type) => Object.values(role[type] || {});

export default role;
