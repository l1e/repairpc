import React, { Fragment, useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import { useRouter } from 'next/router';


import ServiceSingle from "../../components/parts/ServiceSingle";

import { useSelector } from "react-redux";


import { withTranslation } from 'react-i18next';

import Layout from "../../components/layouts/Layout";

export default function Index({ page_id, backpath }) {

    let getBackpath = backpath;

    let id = (page_id !== undefined ? page_id.slice(0, -1) : 1);

    if (getBackpath.includes('m') === true) {
        backpath = '/';
    } else {
        backpath = '/services';
    }

    return (
        <Layout>
            <Fragment>
                <ServiceSingle id={id} backpath={backpath} />
            </Fragment>
        </Layout>

    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            page_id: context.params.service_id,
            backpath: '/'
        }
    }
}
