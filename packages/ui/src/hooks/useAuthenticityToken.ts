export const useAuthenticityToken = (): string => {
  const token =
    (document?.querySelector("meta[name=csrf-token]") as HTMLMetaElement)
      ?.content || "";

  return token;
};
