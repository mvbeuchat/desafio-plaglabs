import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'antd';

const API_URL = "http://plagstore-env.eba-p8qspvph.us-east-2.elasticbeanstalk.com/"

function getSalesByClient() {
    return axios.get(API_URL + "salesByClient").then((response) => response.data)
}

function SalesByClient(){

    const [clients, setClients] = useState([]);

    useEffect(() => {
        let mounted = true;
        getSalesByClient().then((data) => {
            if (mounted){
                setClients(data);
            }
        })
        return () => (mounted = false);
    }, []);

    const columns = [
        {
          title: 'Categoria',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'RUT',
          dataIndex: 'rut',
          key: 'rut',
        },
        {
          title: 'Promedio gastado por compra',
          dataIndex: 'spentAverage',
          key: 'spentAverage',
          sorter: (a, b) => a.spentAverage - b.spentAverage,
        },
    ];

    return (
    <div>
        <Table columns={columns} dataSource={clients} />
    </div>
    );
}

export default SalesByClient;