import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Badge } from 'antd';

const API_URL = "http://plagstore-env.eba-p8qspvph.us-east-2.elasticbeanstalk.com/"

function getSales() {
    return axios.get(API_URL + "lastSales").then((response) => response.data)
}

function Sales(){

    const [sales, setSales] = useState([]);

    useEffect(() => {
        let mounted = true;
        getSales().then((data) => {
            if (mounted){
                setSales(data);
            }
        })
        return () => (mounted = false);
    }, []);

    const columns = [
        {
          title: 'Numero de compra',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Estado',
          dataIndex: 'status',
          key: 'status',
          sorter: (a, b) => a.status - b.status,
        },
        {
          title: 'Fecha',
          dataIndex: 'date',
          key: 'date',
        },
    ];

    return (
    <div>
        <Table columns={columns} dataSource={sales}/>
    </div>
    );
}

export default Sales;