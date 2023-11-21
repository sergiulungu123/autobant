'use client';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { Dropdown } from 'flowbite-react/lib/esm/components';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    router.push(`/${language}`);
  };
  return (
    <div>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
