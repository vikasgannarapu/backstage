import React from 'react';
import { Entity } from '@backstage/catalog-model';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Routes, Route } from 'react-router';
import { rootRouteRef } from '../routes';
// import { WorkflowRunDetails } from './WorkflowRunDetails';
// import { WorkflowRunsTable } from './WorkflowRunsTable';
import { SONATYPE_NEXUS_ANNOTATION } from '../hooks/useGetProjectNames';
import { MissingAnnotationEmptyState } from '@backstage/core-components';
import { ExampleComponent } from './ExampleComponent';
import { ExampleFetchComponent } from './ExampleFetchComponent';
import { NexusTabsPage } from './NexusTabsPage';
// import { NexusPage } from './NexusPage';
// import { NexusAssetPage } from './NexusAssetPage';

export const isSonatypeNexusRepoAvailable = (entity: Entity) =>
  Boolean(entity.metadata.annotations?.[SONATYPE_NEXUS_ANNOTATION]);

export const Router = () => {
  const { entity } = useEntity();

//   if (!isSonatypeNexusRepoAvailable(entity)) {
//     return <MissingAnnotationEmptyState annotation={SONATYPE_NEXUS_ANNOTATION} />;
//   }

  return (
    <Routes>
      <Route path="/*" element={<NexusTabsPage />} />
      {/* <Route
        path={`${sonatypeNexusAssetViewRouteRef.path}`}
        element={<ExampleFetchComponent entity={entity} />}
      /> */}
    </Routes>
  );
};