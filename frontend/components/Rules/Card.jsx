import Link from "next/link";
import React from "react";
import moment from "moment";
import 'moment/locale/ru'

export default function RuleCard({ rule }) {
    const date = moment(rule.published_at).calendar()
    return (
        <div key={rule.id} className='flex flex-col w-1/3 mb-5 h-96'>
            <div className="  bg-white flex flex-col min-w-0 h-full justify-between border mb-5  border-black m-1">
                <div className="p-7">
                    <div className="flex flex-col justify-between mb-3">
                        <div className="text-md text-gray-600 mb-2">{date}</div>
                        <div className="font-bold text-md line-clamp-3">{rule.title}</div>
                    </div>
                    <p className="text-md overflow-hidden max-h-24 line-clamp-4">
                        {rule.body?.blocks ? rule.body.blocks[0].data.text : ''}
                    </p>
                </div>
                <Link href={`/rule/${rule.id}`}>
                    <a
                        className="flex justify-center items-center text-lg font-bold py-6 border-t bg-white
                                border-black cursor-pointer bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                    >
                        Открыть
                    </a>
                </Link>
            </div>
        </div>
    )
}
