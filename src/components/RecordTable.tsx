import type { GovernedRecord } from "@/lib/types";

export function RecordTable({ records }: { records: GovernedRecord[] }) {
  return (
    <div className="wide-panel">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.type}</td>
              <td>{record.status}</td>
              <td>{record.owner}</td>
              <td>{record.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
