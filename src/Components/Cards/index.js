import React, { Component } from "react";
import {
  StyledLink,
  Card,
  Title,
  Blurb,
  HorizontalCenter,
  CardWrapper,
  Line,
  LinkWrapper,
  Divider,
  Icon
} from "./style";
import YouTube from "react-youtube";


class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data
    return (
      <HorizontalCenter>
        {data.map((item, index) => {
          const color = 1 === index % 2 ? "white" : "#efd469";
          return (
            <>
              <Card background={color}>
                <CardWrapper>
                  <Title>{item.title}  <Icon as='img' src={item.image}/></Title>
                  <Line as="hr" />
                  <Blurb>
                    <b> {item.blurb[0]}</b>
                    <br /> {item.blurb[1]}
                  </Blurb>
                 
                  <Divider />
                </CardWrapper>
                {item.videoUrl && (
                  <YouTube
                    videoId={item.videoUrl}
                    opts={
                      window.innerWidth > 600
                        ? { width: '64%' }
                        : { width: '95%'}
                    }
                  />
                )}
                 {item.webUrl && (
                    <LinkWrapper>
                      <StyledLink as="a" href={item.webUrl}>
                        web page
                      </StyledLink>
                    </LinkWrapper>
                  )}
                <Divider height={8} />
              </Card>
              <Divider />
            </>
          );
        })}
      </HorizontalCenter>
    );
  }
}
export default Cards;