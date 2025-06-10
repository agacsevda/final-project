import { ProfileForm } from "@/components/layout/authtabs/ProfileForm";
import { ChangePasswordDialog } from "@/components/layout/authtabs/ChangePasswordDialog";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Hesap Bilgileri</h1>
        <ChangePasswordDialog />
      </div>
      <ProfileForm />
    </div>
  );
} 