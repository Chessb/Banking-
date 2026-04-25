import Card from '../ui/Card';
import { adminModules } from '../../data/templates';

function AdminTemplate() {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {adminModules.map(([title, details]) => (
        <Card key={title} title={title}>
          <p className="text-sm text-slate-700">{details}</p>
        </Card>
      ))}

      <Card title="Admin route map">
        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">
          {`/admin
/admin/users
/admin/fraud
/admin/disputes
/admin/settings
/admin/audit-log`}
        </pre>
      </Card>

      <Card title="Privileged access checklist">
        <ul className="list-inside list-disc space-y-2 text-sm text-slate-700">
          <li>Mandatory MFA for all operator roles</li>
          <li>Dual approvals for account closure + limit overrides</li>
          <li>IP allowlisting for sensitive admin groups</li>
          <li>Real-time alerts for suspicious operator behavior</li>
        </ul>
      </Card>
    </div>
  );
}

export default AdminTemplate;
