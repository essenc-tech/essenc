import WorkspaceCard from './workspace-card';
import { workspaces } from '@/data/workspaces';

export default function WorkspaceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workspaces.map((workspace) => (
        <WorkspaceCard
          key={workspace.id}
          id={workspace.id}
          slug={workspace.slug}
          title={workspace.title}
          description={workspace.description}
          icon={workspace.icon}
          color={workspace.color}
          toolCount={workspace.toolCount}
        />
      ))}
    </div>
  );
}