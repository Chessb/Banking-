import { useState } from 'react';
import Card from '../ui/Card';
import {
  frontendComponents,
  frontendPages,
  investmentPackages,
  walletProviders
} from '../../data/templates';

function FrontendTemplate() {
  const [selectedPackage, setSelectedPackage] = useState(investmentPackages[1].id);
  const [connectedWallet, setConnectedWallet] = useState('');

  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <Card title="Core pages">
        <ul className="list-inside list-disc space-y-2 text-sm text-slate-700">
          {frontendPages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card title="UI building blocks" subtitle="Reusable React component set">
        <ul className="list-inside list-disc space-y-2 text-sm text-slate-700">
          {frontendComponents.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card title="Investment packages" subtitle="Sample offer cards for multi-purpose money flows">
        <div className="space-y-3">
          {investmentPackages.map((pkg) => {
            const isActive = selectedPackage === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  isActive ? 'border-brand-600 bg-brand-50' : 'border-slate-200 bg-slate-50 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">{pkg.name}</p>
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-slate-600">Risk: {pkg.risk}</span>
                </div>
                <p className="mt-1 text-xs text-slate-600">Minimum {pkg.minimum} • Expected {pkg.expectedRange}</p>
                <p className="mt-2 text-xs text-slate-700">{pkg.description}</p>
              </button>
            );
          })}
        </div>
      </Card>

      <Card title="Wallet connect" subtitle="Mock wallet flow UI (no real blockchain connection)">
        <div className="space-y-3">
          <p className="text-sm text-slate-700">
            Status:{' '}
            <span className={connectedWallet ? 'font-semibold text-emerald-600' : 'font-semibold text-amber-600'}>
              {connectedWallet ? `Connected to ${connectedWallet}` : 'Not connected'}
            </span>
          </p>

          <div className="grid gap-2 sm:grid-cols-3">
            {walletProviders.map((provider) => (
              <button
                key={provider}
                type="button"
                onClick={() => setConnectedWallet(provider)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Connect {provider}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setConnectedWallet('')}
            className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800"
          >
            Disconnect wallet
          </button>
        </div>
      </Card>
    </div>
  );
}

export default FrontendTemplate;
