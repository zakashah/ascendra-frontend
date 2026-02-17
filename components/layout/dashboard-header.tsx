import { DashboardTabs } from './dashboard-tabs';
import { DashboardTopbar } from './dashboard-topbar';

export function DashboardHeader() {
  return (
    <>
      <div className="pl-4 md:pl-5 no-scrollbar relative flex h-full items-center justify-between overflow-x-auto overscroll-x-none">
        <div className="me-4 flex items-center">
          <div className="flex items-center gap-0.5 py-3">
            <a
              href=""
              className="px-1 group/organization-switcher gap-2.5 flex h-8 items-center whitespace-nowrap rounded-sm font-book focus-visible:outline-ceramic-focus-[3px_-0.5rem] [:where(&)]:gap-1.5"
            >
              Personal workspace
            </a>
          </div>
        </div>
      </div>
      <DashboardTopbar />
      <DashboardTabs />
    </>
  );
}
