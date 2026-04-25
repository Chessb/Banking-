import { useMemo, useState } from 'react';
import AdminTemplate from './components/templates/AdminTemplate';
import BackendTemplate from './components/templates/BackendTemplate';
import FrontendTemplate from './components/templates/FrontendTemplate';
import Card from './components/ui/Card';
import { templateTabs } from './data/templates';

function ProgressBadge({ completion }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Template completeness</span>
        <span>{completion}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-brand-600" style={{ width: `${completion}%` }} />
      </div>
    </div>
  );
}

function TabButton({ tab, activeTab, onChange }) {
  const active = tab.id === activeTab;

  return (
    <button
      type="button"
      onClick={() => onChange(tab.id)}
      className={`rounded-xl p-4 text-left transition ${
        active
          ? 'bg-brand-600 text-white shadow-md'
          : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
      }`}
    >
      <p className="text-sm font-semibold">{tab.label} Template</p>
      <p className={`mt-1 text-xs ${active ? 'text-brand-50' : 'text-slate-500'}`}>{tab.description}</p>
      <div className="mt-3">
        <div className={`h-1.5 rounded-full ${active ? 'bg-brand-400' : 'bg-slate-200'}`}>
          <div className={`h-1.5 rounded-full ${active ? 'bg-white' : 'bg-brand-600'}`} style={{ width: `${tab.completion}%` }} />
        </div>
      </div>
    </button>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeMeta = useMemo(() => {
    const selected = templateTabs.find((tab) => tab.id === activeTab);
    return selected ?? templateTabs[0];
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-r from-brand-900 via-brand-700 to-brand-600 p-6 text-white shadow-xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-50">Banking Platform Starter</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Multi-purpose Money Platform</h1>
          <p className="mt-2 max-w-3xl text-sm text-brand-50 sm:text-base">
            Includes banking, investments, and wallet-connect flows with separate frontend, backend, and admin templates.
          </p>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          {templateTabs.map((tab) => (
            <TabButton key={tab.id} tab={tab} activeTab={activeTab} onChange={setActiveTab} />
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-slate-900">{activeMeta.label} Template</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                Current focus: {activeMeta.description}
              </span>
            </div>

            {activeTab === 'frontend' ? <FrontendTemplate /> : null}
            {activeTab === 'backend' ? <BackendTemplate /> : null}
            {activeTab === 'admin' ? <AdminTemplate /> : null}
          </div>

          <aside className="space-y-4">
            <Card title="Template health">
              <ProgressBadge completion={activeMeta.completion} />
              <p className="mt-3 text-sm text-slate-600">
                Use this as a planning metric. 100% means fully implemented screens/endpoints, not just placeholders.
              </p>
            </Card>

            <Card title="Next implementation steps" subtitle="Recommended sprint order">
              <ol className="list-inside list-decimal space-y-2 text-sm text-slate-700">
                <li>Set up routing and page shells for the selected template.</li>
                <li>Connect mock API responses and loading states.</li>
                <li>Add form validation and error handling flows.</li>
                <li>Write tests for critical user journeys.</li>
              </ol>
            </Card>

            <Card title="Definition of done">
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-700">
                <li>Accessibility pass (keyboard + SR labels)</li>
                <li>Responsive behavior at mobile/tablet/desktop</li>
                <li>Audit and security checks documented</li>
                <li>Unit + integration tests passing</li>
              </ul>
            </Card>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default App;
