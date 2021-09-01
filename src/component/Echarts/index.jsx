import React, { useEffect, useState } from 'react';
import services from '@/common/services/home';
const Echarts = ()  => {
    const [list, setlist] = useState([]);
    const foo = async () => {
        let data = await services.getlist({});
        let list1 = data.data.list
        for(let i = 0; i<list1.length; i++){
            const res = await services.getcount({id: i});
            list1[i].count = res.data.data
        }
        setlist([...list1])

    }
    const foo1 = (inc) => {
        // const res = await services.getcount({...inc});
        // inc.count = res.data.data
        return <div key={inc.id}>
            {inc.id}---{inc.count}
        </div>
    }
    useEffect(() => {
        foo()
    }, [])

    return (
        <div>
            图表练习
            {
                list.map(foo1)
            }
        </div>
    ) 
}

export default React.memo(Echarts);