import DrawerMenu from '@/components/drawerMenu';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer 
        screenOptions={{ drawerStyle: { width: 200}, }}
        drawerContent={(props) => <DrawerMenu {...props} />}
    />
  );
}
