import React, { useEffect, useState } from 'react';
import { useApi, errorApiRef } from '@backstage/core-plugin-api';

export const useSearchComponentByName = () => {

    const [searchResults, setSearchResults] = useState([]);
    const errorApi = useApi(errorApiRef);

    useEffect(() => {
        fetch(`http://localhost:8081/service/rest/v1/search?name=mysql&format=helm`, { headers: {
            Authorization: `Basic ${window.btoa(`${'admin'}:${'23d0840f-079e-48f8-9876-55ab1a463040'}`)}`
        }}).then(async res => {
            let data = await res.json();
            console.log('data = ', data);
            if(res.status >= 200 && res.status < 400) {
                setSearchResults(data?.items || []);
            } else {
                setSearchResults([]);
            }
        }).catch(err => {
            setSearchResults([]);
            errorApi.post(err);
        })
    }, []);

    return [searchResults];

}