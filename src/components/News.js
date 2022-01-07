import React from 'react'
import NewsCard from './NewsCard'
import { useState , useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


function News(props) {
    
    let {country,q,category,apiKey,pageSize} = props;
    

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    // changing url according to query {different for category and search box }
    var Url = '';
    if(q===''){
        Url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`
    }else{
        Url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`
    }

    // function to fetch news from api 
    const updateNews = async ()=> {
        props.setProgress(10); 
        const url = Url;
        let data = await fetch(url);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }


useEffect(() => {
    updateNews();
}, [])


// function for adding more data in InfiniteScroll 
const fetchMoreData = async () => {   
    const url = Url;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

//  passing theme for the news cards 
    const theme=()=>{
        if(props.mode){
            return {
                'txt1':'dk-txt1',
                'txt2':'dk-txt2',
                'element':'dk-element',
                'body':'dk-body',
                'link':'dk-link',
            }
        }else{
            return {
                'txt1':'lt-txt1',
                'txt2':'lt-txt2',
                'element':'lt-element',
                'body':'lt-body',
                'link':'lt-link',
            } 
        }
    }
let a = theme();


    return (
        <>
        <div className={`text-5xl ml-72 w-9/12 text-center mt-10 ${!props.mode===true?'text-lt-txt2':'text-dk-txt2'}`}>top headlines - <span className={`text-dk-link`}>{category || q}</span></div>
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            style={{overflow :'hidden'}}
        >
        <div className='ml-72 mt-10 my-auto flex flex-wrap gap-6 right-0 overflow-hidden '>
            {articles.map((element)=> {
                return <NewsCard title={element.title} description={element.description} image={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} theme={a}/>
            })}
        </div>
        </InfiniteScroll>
        </>
    )
}

export default News


News.defaultProps = {
    q : ''
}