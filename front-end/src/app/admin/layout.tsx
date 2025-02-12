import AdminFooter from '@/components/AdminFooter';
import AdminHeader from '@/components/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AdminHeader />
        <div className="admin-bg">
          <div className="admin-main">
            <aside className="admin-sidebar">
            </aside>
            <main className="admin-content">{children}</main>
          </div>
        </div>
        <AdminFooter />
      </body>
    </html>
  );
}
