import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useSWR from 'swr'
import axios from '@/lib/axios'


const Dashboard = () => {

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    QA投稿
                </h2>
            }>
            <Head>
                <title>!!QA!! - QA投稿</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
