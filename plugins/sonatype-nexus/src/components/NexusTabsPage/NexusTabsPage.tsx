import React from 'react';
import {
    InfoCard,
    Header,
    Page,
    Content,
    ContentHeader,
    HeaderLabel,
    SupportButton,
    TabbedLayout,
  } from '@backstage/core-components';
import { useGetProjectNames } from '../../hooks/useGetProjectNames';
import { useAsyncEntity } from '@backstage/plugin-catalog-react';
import {HelmComponent} from '../HelmComponent';
import { MavenComponent } from '../MavenComponent';
import { SONATYPE_NEXUS_ANNOTATION } from '../../hooks/useGetProjectNames';

export const NexusTabsPage = () => {

    const { entity } = useAsyncEntity();
    entity.metadata.annotations[SONATYPE_NEXUS_ANNOTATION] = ['format=helm,group=docker-release-group,id=mysql,owner=infrastructure-team'];
    // TODO: Change the name of the variable
    // const {value } = useGetProjectNames(entity);
    // console.log('value = ', value);

    return (
        <TabbedLayout>
            <TabbedLayout.Route path='/helm' title='Helm'>
                <HelmComponent entity={entity} />
            </TabbedLayout.Route>
            <TabbedLayout.Route path='/maven' title='Maven'>
                <MavenComponent />
            </TabbedLayout.Route>
        </TabbedLayout>
    )
}