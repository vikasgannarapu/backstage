import { Content, Table } from '@backstage/core-components';
import React from 'react';
import { useGetProjectNames, useSearchComponentByName } from '../../hooks';
// import {LogLevel, OSSIndexRequestService, TestLogger} from '@sonatype/js-sona-types';
// import {PackageURL} from 'packageurl-js';`   1111111111111111111111111111111111111111111111111111111111111111111111111111111111

export const HelmComponent = ({entity}) => {

    const {value } = useGetProjectNames(entity);
    console.log('value = ', value);

    // const logger = new TestLogger(LogLevel.WARN);
    // const service = new OSSIndexRequestService({browser: false, product: 'product', version: '1.0', logger}, localStorage);

    // const coordinates = [];
    // coordinates.push(new PackageURL("npm", undefined, "jquery", "3.1.1", undefined, undefined));

    // service.getComponentDetails(coordinates)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     // setError(err.toString());
    //     console.error(err);
    //   });

    const [searchResults] = useSearchComponentByName();

    console.log('search results = ', searchResults);


    return (
            <Table columns={[
                {
                    title: 'Name',
                    field: 'name'
                },
                {
                    title: 'Repository',
                    field: 'repository'
                },
                {
                    title: 'Version',
                    field: 'version'
                },
                {
                    title: 'Group',
                    field: 'group'
                },
                {
                    title: 'Format',
                    field: 'format'
                },
                {
                    title: 'Id',
                    field: 'id'
                }
            ]} 
            
            data={searchResults}
            options={{
                search:  true,
                pageSize: 10
            }}
            title={`Total (${searchResults?.length || 0}) components`}
            >

            </Table>
    )
}