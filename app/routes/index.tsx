import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="p-4">
      <h1 className="text-2xl px-4">Welcome to this Polymath!</h1>

      <p className="p-4">
        Here are of the things I can do. I'm a work in progress.
      </p>

      <div className="p-4">
        <h2 className="text-xl font-bold border-b border-indigo-500/30 hover:border-indigo-500/60">
          Clients
        </h2>

        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-2">
            <Link to="/client/local">
              Client that ask this endpoint for Polymath Results
            </Link>
          </li>
          <li className="py-2">
            <Link to="/client/single">
              Single Client asking for completions
            </Link>
          </li>
          <li className="py-2">
            <Link to="/client/multi">Multi Client asking for completions</Link>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold border-b border-indigo-500/30 hover:border-indigo-500/60">
          Endpoint
        </h2>

        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-2">
            <Link to="/endpoint/ask">Ask Endpoint for Polymath Results</Link>
            <Link to="/endpoint/complete">
              Ask Endpoint for full completion
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
