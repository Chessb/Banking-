import Card from '../ui/Card';
import { backendApis, backendDomains } from '../../data/templates';

function BackendTemplate() {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <Card title="Domain modules" subtitle="Ownership boundaries">
        <ul className="space-y-3 text-sm text-slate-700">
          {backendDomains.map(([name, purpose]) => (
            <li key={name}>
              <p className="font-semibold text-slate-900">{name}</p>
              <p>{purpose}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Starter API endpoints">
        <div className="space-y-2 text-sm">
          {backendApis.map(([method, path]) => (
            <div key={`${method}-${path}`} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
              <span className="rounded bg-slate-900 px-2 py-1 text-xs font-semibold text-white">{method}</span>
              <code className="text-xs text-slate-700">{path}</code>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Service layout">
        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">
          {`services/
  identity-service/
  accounts-service/
  payments-service/
  audit-service/
shared/
  auth/
  events/
  db/`}
        </pre>
      </Card>

      <Card title="Reliability + security checklist">
        <ul className="list-inside list-disc space-y-2 text-sm text-slate-700">
          <li>Idempotency keys for write endpoints</li>
          <li>Audit logs on all monetary and admin mutations</li>
          <li>Rate-limits on authentication + transfer APIs</li>
          <li>Scoped API tokens with short expirations</li>
        </ul>
      </Card>
    </div>
  );
}

export default BackendTemplate;
