import AppProviders from '@/app/providers/AppProviders';
import { useNavbarHook } from '../../hooks/useNavbarHook';
import { NavbarBar } from './NavbarBar';

export default function Navbar() {
  return (
    <AppProviders withToaster>
      <NavbarIsland />
    </AppProviders>
  );
}

function NavbarIsland() {
  const { t, count, openDrawer, query, setQuery, submitSearch, goSearch, goCart } = useNavbarHook();
  return (
    <NavbarBar
      t={t}
      count={count}
      openDrawer={openDrawer}
      query={query}
      onQuery={setQuery}
      onSearch={submitSearch}
      goSearch={goSearch}
      goCart={goCart}
    />
  );
}
