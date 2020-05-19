const util = {
  test: () => {
    console.log("test");
  },
  isUrl: (url) => {
    return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(
      url
    );
  },
};
