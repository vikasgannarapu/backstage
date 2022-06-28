import useAsync from 'react-use/lib/useAsync';
import { Entity } from '@backstage/catalog-model';

export const SONATYPE_NEXUS_ANNOTATION = 'sonatype.com/repository-slug';

export const useGetProjectNames = (entity: Entity|undefined) => {
    const { value, loading, error } = useAsync(async () => {
        return entity?.metadata.annotations?.[SONATYPE_NEXUS_ANNOTATION] ?? [];
    });
    return { value, loading, error };
};
