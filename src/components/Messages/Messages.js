import React from "react";
import { Empty, Spin } from "antd";
import Message from "../Message/Message";
import "./Messages.scss";
import classNames from "classnames";

const Messages = ({ items, isLoading, blockRef }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin size="large" tip="Загрузка сообщений..."></Spin>
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map((item) => <Message key={item._id} {...item} />)
        ) : (
          <Empty description="Пока сообщений нет" />
        )
      ) : (
        <Empty description="Начните с кем-нибудь диалог" />
      )}
    </div>
  );
};

export default Messages;

/* <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date()}
        attachments={[
          {
            filename: "image1.jpg",
            url:
              "https://sun9-24.userapi.com/c625216/v625216110/2fc29/WxailHqyCOs.jpg?ava=1",
          },
          {
            filename: "image2.jpg",
            url:
              "https://sun1-30.userapi.com/c857524/v857524759/1bb9bb/FthkHEUo2Hw.jpg?ava=1",
          },
          {
            filename: "image3.jpg",
            url:
              "https://sun1-89.userapi.com/c858332/v858332270/1a74df/RP8095QLc1s.jpg?ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        text="Hello, World!"
        date={new Date()}
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        attachments={[
          {
            filename: "image1.jpg",
            url:
              "https://sun9-24.userapi.com/c625216/v625216110/2fc29/WxailHqyCOs.jpg?ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        isTyping
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date()}
        attachments={[
          {
            filename: "image1.jpg",
            url:
              "https://sun9-24.userapi.com/c625216/v625216110/2fc29/WxailHqyCOs.jpg?ava=1",
          },
          {
            filename: "image2.jpg",
            url:
              "https://sun1-30.userapi.com/c857524/v857524759/1bb9bb/FthkHEUo2Hw.jpg?ava=1",
          },
          {
            filename: "image3.jpg",
            url:
              "https://sun1-89.userapi.com/c858332/v858332270/1a74df/RP8095QLc1s.jpg?ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        text="Hello, World!"
        date={new Date()}
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        attachments={[
          {
            filename: "image1.jpg",
            url:
              "https://sun9-24.userapi.com/c625216/v625216110/2fc29/WxailHqyCOs.jpg?ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun9-67.userapi.com/c852036/v852036196/134c19/oCxXHatSU_w.jpg?ava=1"
        isTyping
      /> */
