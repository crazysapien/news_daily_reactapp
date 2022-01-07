import React from 'react'

function NewsCard(props) {
    return (
        <div className={`flex justify-center h-auto rounded-xl bg-${props.theme.element}`}>
            <div className="rounded-lg h-1/3 shadow-lg max-w-xs">
                <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg h-full w-full bg-cover" src={props.image} alt="" />
                </a>
                <div className="p-6 flex align-middle justify-between flex-col">
                    <h5 className={`text-${props.theme.txt1} text-lg font-medium h-32 mb-2`}>
                        {/* removing source text from end of title  */}
                        {props.title.replace('-','').split(' ').slice(0,-2).join(' ')}</h5>
                    <p className={`text-${props.theme.txt2} text-base mb-4 h-32 border-t-2 border-solid border-lt-link`}>
                    {/* limiting description to 140 characters  */}
                    {props.description.slice(0,140)+' ...'}
                    </p>
                    <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-${props.theme.txt2} `}>{new Date(props.time).toGMTString()}</span>
                    <br/>
                    <a href={props.url} className={`cursor-pointer text-center inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md bg-${props.theme.link} `}>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
