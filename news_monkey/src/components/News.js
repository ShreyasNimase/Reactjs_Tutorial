import React, { useState } from "react";
import NewsItem from "./NewsItem";

export default function News() {
  let articlesData = [
    {
      status: "ok",
      totalResults: 4,
      articles: [
        {
          source: {
            id: "news-com-au",
            name: "News.com.au",
          },
          author: null,
          title: "McLaren forced to review Piastri, Konstas pic",
          description:
            "When Oscar Piastri invited a handful of Australian cricketers to tour the McLaren factory outside London last week, insiders at the leading F1 team were in a spot of bother.",
          url: "https://www.news.com.au/sport/motorsport/formula-one/why-mclaren-had-to-vet-photos-of-australian-cricketers-meetup-with-f1-star-oscar-piastri/news-story/f16748f9e15c4b326c65731d4c1f5234",
          urlToImage:
            "https://content.api.news/v3/images/bin/69fb3faca505508e396c2b1acd08f2d1",
          publishedAt: "2025-06-12T03:51:00Z",
          content:
            "When Oscar Piastri invited a handful of Australian cricketers to tour the McLaren factory outside London last week, insiders at the leading F1 team were in a spot of bother.\r\nThe entire visit was kep… [+2478 chars]",
        },
        {
          source: {
            id: "nrk",
            name: "NRK",
          },
          author: "Brede Bleiklie Thomassen",
          title:
            "Viktig stevne i fare etter absurd skade: – En prestasjon i seg selv",
          description:
            "Et uheldig sammenstøt med en cricketspiller skaper trøbbel for Filip Ingebrigtsen. Nå kan Diamond League-stevnet i Stockholm ryke.",
          url: "https://www.nrk.no/sport/filip-ingebrigtsen-roper-absurd-skade-_-diamond-league-stevne-i-fare-1.17451081",
          urlToImage:
            "https://gfx.nrk.no/ji81U91MOCmBfPllDBCGUwx-5Hi9xdGgFDDGk4tsPSJg.jpg",
          publishedAt: "2025-06-12T03:25:16Z",
          content:
            "Jeg fikk en liten smell i leggen faktisk. Det var et lite uhell på den ene økta der jeg nesten kolliderte med en cricketspiller, sier Filip Ingebrigtsen til NRK. \r\nIngebrigtsen skulle gjøre en av sin… [+3104 chars]",
        },
        {
          source: {
            id: "espn-cric-info",
            name: "ESPN Cric Info",
          },
          author: null,
          title:
            "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          description:
            "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          publishedAt: "2020-04-27T11:41:47Z",
          content:
            "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
          source: {
            id: "espn-cric-info",
            name: "ESPN Cric Info",
          },
          author: null,
          title:
            "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          description:
            "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          publishedAt: "2020-03-30T15:26:05Z",
          content:
            "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
        },
      ],
    },
  ];

  let articlesList = articlesData[0].articles;
  return (
    <div className="container my-3 ">
      <h1>News Monkey - latest news</h1>
      <div className="row">
        {articlesList.map((element) => {
          return (
            <div className="col-md-4  mt-5" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 45)}
                description={element.description.slice(0, 88)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
