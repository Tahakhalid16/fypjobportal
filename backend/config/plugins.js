module.exports = ({ env }) => ({
    // ...
    "users-permissions": {
      config: {
        register: {
          allowedFields: ["user_type", "address", "profile_img"],
        },
      },
    },
    // ...
  });