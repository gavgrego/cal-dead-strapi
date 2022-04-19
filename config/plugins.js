module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "dcm7sy0wf"),
        api_key: env("CLOUDINARY_KEY", "828171717283695"),
        api_secret: env("CLOUDINARY_SECRET", "oUK8PTLvLk0cTZmtdijRRAlB_0w"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
