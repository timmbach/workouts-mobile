import { AuthView } from "@clerk/expo/native";

export default function Page() {
  return <AuthView mode="signUp" isDismissible={false} />;
}
