import { a as i, p as e, w as Be, A as _e } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { u as fe } from "./useNavigateWithUTM-1Hi9sm_B.js";
import { u as be } from "./context-DVPZRWQf.js";
import { B as Re } from "./BlockedPopup-RPTI6beX.js";
import { k as ae, d as Fe, c as $e } from "./api-bupDNBJY.js";
import "./utm-ClCK1WqV.js";
function ke() {
    const t = [];
    for (let a = 0; a < 30; a++) t.push(Math.floor(Math.random() * 21) + 12);
    return t;
}
const Ve = {
    id: 1,
    sessionKey: "chat-1",
    storageTimeKey: "chat-time-start-15",
    readKey: "chat-1-read",
    defaultStatus: "En línea",
    messages: [
        {
            id: "1",
            type: "date",
            direction: "system",
            content: "Hace 3 días, 11:12",
        },
        {
            id: "2",
            type: "text",
            direction: "received",
            content: "Hola, mi bombón",
        },
        {
            id: "3",
            type: "text",
            direction: "sent",
            content: "Hola, amor de mi vidq",
        },
        { id: "4", type: "text", direction: "sent", content: "vida*" },
        { id: "5", type: "text", direction: "sent", content: "Te extraño" },
        {
            id: "6",
            type: "image",
            direction: "received",
            imageSrc: "/images/screenshots/nudes1-chat1.jpg",
            isSensitive: !0,
            reaction: "❤️",
        },
        { id: "7", type: "text", direction: "received", content: "¿De eso?" },
        { id: "8", type: "text", direction: "sent", content: "😍😍😍😍😍😍" },
        {
            id: "9",
            type: "text",
            direction: "received",
            blurredContent: "** * ** *?",
        },
        { id: "10", type: "audio", direction: "sent", audioDuration: "0:11" },
        {
            id: "11",
            type: "text",
            direction: "received",
            content: " en ",
            blurredContent: "** * **  ** **",
            dynamicType: "city",
        },
        {
            id: "12",
            type: "text",
            direction: "sent",
            content: "Está bien, mañana o pasado mañana",
            reaction: "👍🏻",
        },
        { id: "13", type: "date", direction: "system", content: "AYER, 21:34" },
        { id: "14", type: "text", direction: "received", content: "Amor" },
        {
            id: "15",
            type: "text",
            direction: "received",
            content: "¿Puedes hablar?",
        },
        {
            id: "16",
            type: "reply",
            direction: "sent",
            content: "Hola, bebé",
            replyTo: "Amor",
            replyLabel: "Respondiste",
        },
        {
            id: "17",
            type: "text",
            direction: "received",
            content: "Espera que ",
            blurredContent: "* ** *** ** **",
        },
        { id: "18", type: "text", direction: "sent", content: "kkkkkkkkk" },
        {
            id: "19",
            type: "text",
            direction: "received",
            content: "🦌🦌🦌 jajaja",
            reaction: "😂",
        },
        {
            id: "20",
            type: "text",
            direction: "received",
            content: "Ya estoy aquí, solo para avisarte ",
            blurredContent: "** * **** *,  ** *",
            reaction: "❤️",
            dynamicType: "city",
        },
        { id: "21", type: "heart", direction: "received" },
        { id: "22", type: "text", direction: "sent", content: "¿Dónde estás?" },
        { id: "23", type: "text", direction: "sent", content: "¿En casa de tu prima?" },
        {
            id: "24",
            type: "reply",
            direction: "received",
            content: "No",
            replyTo: "¿En casa de tu prima?",
            replyLabel: "te respondió",
        },
        {
            id: "25",
            type: "text",
            direction: "received",
            content: "Casa de  ",
            blurredContent: "** ** ** **",
        },
        { id: "26", type: "text", direction: "sent", content: "Está bien 😘" },
        {
            id: "27",
            type: "text",
            direction: "sent",
            content: "Voy a ",
            blurredContent: "** * ** * ** ** ** ** *",
            reaction: "❤️",
        },
        { id: "28", type: "audio", direction: "received", audioDuration: "0:32" },
        { id: "29", type: "audio", direction: "received", audioDuration: "0:07" },
        { id: "30", type: "text", direction: "sent", content: "Cuenta con ello" },
        { id: "31", type: "heart", direction: "received" },
        { id: "32", type: "unread_divider", direction: "system" },
        {
            id: "33",
            type: "date",
            direction: "system",
            timeId: "lastMessageTime",
        },
        {
            id: "34",
            type: "text",
            direction: "received",
            content: " ¿adivina qué te olvidaste aquí? jajaja",
            dynamicType: "firstName",
        },
    ],
},
    He = {
        id: 2,
        sessionKey: "chat-2",
        storageTimeKey: "chat-time-start-16",
        readKey: "chat-2-read",
        defaultStatus: "En línea hace 2 h",
        messages: [
            {
                id: "1",
                type: "system_call",
                direction: "system",
                callType: "video",
                callStatus: "normal",
                content: "Videollamada",
                callTimeId: "callTime1",
            },
            {
                id: "2",
                type: "system_call",
                direction: "system",
                callType: "video",
                callStatus: "missed",
                content: "Videollamada perdida",
            },
            { id: "3", type: "text", direction: "sent", content: "La conexión está mal" },
            { id: "4", type: "text", direction: "sent", content: "Estoy usando 4G" },
            { id: "5", type: "text", direction: "sent", content: "Vuelve a llamar" },
            {
                id: "6",
                type: "system_call",
                direction: "system",
                callType: "video",
                callStatus: "normal",
                content: "Videollamada",
                callTimeId: "callTime2",
            },
            {
                id: "7",
                type: "system_call",
                direction: "system",
                callType: "video",
                callStatus: "ended",
                content: "Videollamada finalizada",
                callTimeId: "callTime3",
            },
            {
                id: "8",
                type: "text",
                direction: "sent",
                content: "Qué ricoooooooo",
            },
            { id: "9", type: "text", direction: "sent", content: "🤤🤤🤤" },
            {
                id: "10",
                type: "text",
                direction: "received",
                content: "Mira cómo me dejaste",
            },
            {
                id: "11",
                type: "image",
                direction: "received",
                imageSrc: "/images/screenshots/chat2.nudes1.png",
                isSensitive: !0,
                reaction: "❤️",
            },
            { id: "12", type: "text", direction: "received", content: "Jajaja" },
            { id: "13", type: "text", direction: "sent", content: "JODEEEER" },
            { id: "14", type: "text", direction: "sent", content: "Qué delicia" },
            { id: "15", type: "text", direction: "sent", content: "❤️❤️❤️" },
            {
                id: "16",
                type: "text",
                direction: "received",
                content: "Envíame más tuyas también",
            },
            {
                id: "17",
                type: "image",
                direction: "sent",
                isPackImages: !0,
                packImages: [
                    "/images/screenshots/nudes1-chat2.jpg",
                    "/images/screenshots/pack1.1.chat2.png",
                    "/images/screenshots/fotoblur1.jpg",
                ],
                isSensitive: !0,
                reaction: "😈",
            },
            {
                id: "18",
                type: "text",
                direction: "received",
                content: "Pedí una y mandas 3",
            },
            {
                id: "19",
                type: "text",
                direction: "received",
                content: "Por eso te amo",
            },
            {
                id: "20",
                type: "text",
                direction: "sent",
                content: "Tengo que irme, aquí es peligroso",
            },
            {
                id: "21",
                type: "text",
                direction: "sent",
                content: "No aguanto más, está llegando",
            },
            {
                id: "22",
                type: "text",
                direction: "received",
                content: "Calma, nos vemos pronto",
            },
            {
                id: "23",
                type: "text",
                direction: "sent",
                content: "No aguanto más",
            },
            {
                id: "24",
                type: "text",
                direction: "sent",
                content: "No mandes nada más, ¿vale?",
                reaction: "👍🏻",
            },
        ],
    },
    Ke = {
        id: 3,
        sessionKey: "chat-3",
        storageTimeKey: "chat-time-start-19",
        readKey: "chat-3-read",
        defaultStatus: "En línea",
        messages: [
            {
                id: "1",
                type: "text",
                direction: "sent",
                content:
                    "De todas las cosas de mi vida de las que me arrepiento, involucrarme contigo es la primera",
            },
            {
                id: "2",
                type: "text",
                direction: "sent",
                content: "Y pensar que casi hice pública nuestra relación",
            },
            {
                id: "3",
                type: "text",
                direction: "received",
                content: "Por favor ",
                dynamicType: "userSpiedName",
            },
            {
                id: "4",
                type: "text",
                direction: "received",
                content: "Vamos a ser felices, nos amamos",
            },
            {
                id: "5",
                type: "text",
                direction: "received",
                content: "Es una pena tirar todo esto por la borda",
            },
            {
                id: "6",
                type: "text",
                direction: "received",
                content:
                    "Nunca me sometería a todo esto si este sentimiento no fuera lo más importante de mi vida.",
            },
            {
                id: "7",
                type: "date",
                direction: "system",
                content: "22 DE OCT, 14:33",
            },
            {
                id: "8",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/relacionamentoadois2.jpg",
                storyUsername: "relación...",
                imageSrc: "/images/screenshots/chat3-story1.png",
                hasPlayButton: !0,
            },
            {
                id: "9",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/relacionamentoadois2.jpg",
                storyUsername: "relación...",
                imageSrc: "/images/screenshots/chat3-story2.png",
                hasPlayButton: !0,
            },
            { id: "10", type: "date", direction: "system", timeId: "date27DaysAgo" },
            {
                id: "11",
                type: "text",
                direction: "received",
                content: "Hola, buenas tardes",
            },
            {
                id: "12",
                type: "text",
                direction: "received",
                content: "Sé que evitas hablar conmigo",
            },
            {
                id: "13",
                type: "text",
                direction: "received",
                content: "Pero hoy hace un mes de nuestro último beso",
            },
            {
                id: "14",
                type: "text",
                direction: "received",
                content: "Día ",
                dynamicType: "date2WeeksAhead",
            },
            {
                id: "15",
                type: "date",
                direction: "system",
                content: "Hace 2 días, 18:45",
            },
            {
                id: "16",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "https://i.pravatar.cc/150?img=1",
                storyUsername: "sentimentos_div...",
                imageSrc: "/images/screenshots/chat3-story3.png",
                hasPlayButton: !0,
            },
            {
                id: "17",
                type: "date",
                direction: "system",
                timeId: "lastMessageDate",
            },
            { id: "18", type: "unread_divider", direction: "system" },
            {
                id: "19",
                type: "text",
                direction: "received",
                content: "",
                dynamicType: "userSpiedName",
            },
            { id: "20", type: "text", direction: "received", content: "Buenos días." },
            {
                id: "21",
                type: "text",
                direction: "received",
                content: "¿Por qué ya no me respondes?????",
            },
            {
                id: "22",
                type: "text",
                direction: "received",
                content: "Estoy en la ciudad y quería verte",
            },
        ],
    },
    We = {
        id: 4,
        sessionKey: "chat-4",
        storageTimeKey: "chat-time-start-18",
        readKey: "chat-4-read",
        defaultStatus: "En línea",
        messages: [
            { id: "1", type: "audio", direction: "sent", audioDuration: "0:13" },
            { id: "2", type: "audio", direction: "sent", audioDuration: "0:05" },
            { id: "3", type: "audio", direction: "received", audioDuration: "0:20" },
            {
                id: "4",
                type: "text",
                direction: "sent",
                content: "Está bien, adelante",
            },
            {
                id: "5",
                type: "date",
                direction: "system",
                content: "Hace 2 días, 09:31",
            },
            {
                id: "6",
                type: "text",
                direction: "received",
                content: "Buenos días ",
                dynamicType: "userSpiedName",
            },
            {
                id: "7",
                type: "text",
                direction: "received",
                content: "¿Y, mejoraste?",
            },
            { id: "8", type: "audio", direction: "sent", audioDuration: "4:25" },
            {
                id: "9",
                type: "text",
                direction: "sent",
                content: "Perdón por desahogarme",
            },
            {
                id: "10",
                type: "text",
                direction: "sent",
                content: "Pero no sé qué hacer",
            },
            { id: "11", type: "text", direction: "received", content: "Imagina" },
            { id: "12", type: "audio", direction: "received", audioDuration: "0:41" },
            { id: "13", type: "audio", direction: "received", audioDuration: "0:12" },
            { id: "14", type: "audio", direction: "sent", audioDuration: "0:29" },
            {
                id: "15",
                type: "text",
                direction: "received",
                content: "Sí, ya sabes",
            },
            {
                id: "16",
                type: "text",
                direction: "received",
                content: "En la aventura que tuve con ",
                blurredContent: "** ** * ***",
            },
            {
                id: "17",
                type: "text",
                direction: "received",
                content: "Enamorarse de un amante es difícil, te entiendo, ",
                blurredContent: "** ** * ** ** ** ** ** ** * ** ** ** **",
            },
            { id: "18", type: "audio", direction: "sent", audioDuration: "0:04" },
            { id: "19", type: "audio", direction: "sent", audioDuration: "0:11" },
            { id: "20", type: "text", direction: "received", content: "kkkkkkk" },
            {
                id: "21",
                type: "text",
                direction: "received",
                content: "Vale, hablamos después",
            },
        ],
    },
    qe = {
        id: 5,
        sessionKey: "chat-5",
        storageTimeKey: "chat-time-start-17",
        readKey: "chat-5-read",
        defaultStatus: "En línea hace 33 min",
        messages: [
            {
                id: "1",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/chat5.1a.png",
                storyUsername: "tinhooficial",
                imageSrc: "/images/screenshots/chat5.1.png",
                hasPlayButton: !0,
                reaction: "😂",
            },
            {
                id: "2",
                type: "date",
                direction: "system",
                content: "25 DE NOV, 15:22",
            },
            {
                id: "3",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/chat5.2a.jpg",
                storyUsername: "ikarozets",
                imageSrc: "/images/screenshots/chat5.2.png",
                hasPlayButton: !0,
            },
            {
                id: "4",
                type: "date",
                direction: "system",
                content: "27 DE NOV, 20:15",
            },
            {
                id: "5",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/Chat5.a.png",
                storyUsername: "tettrem",
                imageSrc: "/images/screenshots/chat5.3.png",
                hasPlayButton: !0,
                reaction: "🥲",
            },
            {
                id: "6",
                type: "text",
                direction: "sent",
                content: "Ese me pareció triste",
            },
            {
                id: "7",
                type: "date",
                direction: "system",
                content: "29 DE NOV, 14:08",
            },
            {
                id: "8",
                type: "forwarded_story",
                direction: "sent",
                storyAvatar: "/images/screenshots/Chat5.5a.png",
                storyUsername: "signodaputaria",
                imageSrc: "/images/screenshots/Chat5.5.png",
                hasPlayButton: !0,
            },
            {
                id: "9",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/Chat5.a.png",
                storyUsername: "tettrem",
                imageSrc: "/images/screenshots/Chat5.4.png",
                hasPlayButton: !0,
            },
            { id: "10", type: "date", direction: "system", content: "AYER, 18:45" },
            {
                id: "11",
                type: "forwarded_story",
                direction: "sent",
                storyAvatar: "/images/screenshots/Chat5.6a.png",
                storyUsername: "safadodesejo",
                imageSrc: "/images/screenshots/chat5.6.png",
                hasPlayButton: !0,
                reaction: "😂",
            },
            { id: "12", type: "text", direction: "sent", content: "kkkkkkkkkkkk" },
            {
                id: "13",
                type: "audio",
                direction: "received",
                audioDuration: "0:23",
                reaction: "😂",
            },
            { id: "14", type: "date", direction: "system", content: "AYER 22:11" },
            {
                id: "15",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/chat5.7a.png",
                storyUsername: "morimura",
                imageSrc: "/images/screenshots/Chat5.7.png",
                hasPlayButton: !0,
            },
            { id: "16", type: "unread_divider", direction: "system" },
            {
                id: "17",
                type: "date",
                direction: "system",
                timeId: "lastMessageTime",
            },
            {
                id: "18",
                type: "forwarded_story",
                direction: "received",
                storyAvatar: "/images/screenshots/chat5.8a.png",
                storyUsername: "jonas.milgrau",
                imageSrc: "/images/screenshots/chat.5.8.png",
                hasPlayButton: !0,
            },
        ],
    },
    Ue = { 1: Ve, 2: He, 3: Ke, 4: We, 5: qe },
    le = "viewedChatImages";
function ze(t) {
    if (typeof window > "u") return !1;
    try {
        return JSON.parse(localStorage.getItem(le) || "[]").includes(t);
    } catch {
        return !1;
    }
}
function Ze(t) {
    if (!(typeof window > "u"))
        try {
            const a = JSON.parse(localStorage.getItem(le) || "[]");
            a.includes(t) || (a.push(t), localStorage.setItem(le, JSON.stringify(a)));
        } catch {
            console.warn("Error saving viewed image");
        }
}
function ge(t, a, s, r) {
    const c = (s && s.split("/").pop()?.split("?")[0]) || "",
        y = `chat_${t}_msg_${a}_img_${r}_${c}`;
    return btoa(y).substring(0, 80);
}
function Je(t) {
    return !t || t.length === 0
        ? "xxx*****"
        : t.includes("*")
            ? t
            : (t.length >= 3 ? t.substring(0, 3) : t) + "*****";
}
function Ge() {
    return e.jsx("svg", {
        width: "29",
        height: "29",
        viewBox: "0 0 24 24",
        fill: "none",
        children: e.jsx("path", {
            d: "M15.6 18.6L8.4 12L15.6 5.4",
            stroke: "#F9F9F9",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function Xe() {
    return e.jsxs("svg", {
        "aria-label": "Llamada de audio",
        fill: "currentColor",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24",
        style: { filter: "brightness(0) invert(1)" },
        children: [
            e.jsx("title", { children: "Llamada de audio" }),
            e.jsx("path", {
                d: "M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z",
            }),
        ],
    });
}
function Ye() {
    return e.jsxs("svg", {
        "aria-label": "Videollamada",
        fill: "currentColor",
        height: "24",
        role: "img",
        viewBox: "0 0 24 24",
        width: "24",
        style: { filter: "brightness(0) invert(1)" },
        children: [
            e.jsx("title", { children: "Videollamada" }),
            e.jsx("rect", {
                fill: "none",
                height: "18",
                rx: "3",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                width: "16.999",
                x: "1",
                y: "3",
            }),
            e.jsx("path", {
                d: "m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
            }),
        ],
    });
}
function Qe() {
    return e.jsx("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 83 83",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: e.jsx("path", {
            d: "M35.8701 20.2324C36.9037 20.1103 40.2042 20.1112 43.2041 20.2353C48.5793 20.4576 48.6938 20.5 51.0635 23.1396C52.8362 25.1135 54.0022 25.8192 55.4961 25.8212C58.2213 25.8249 61.6439 28.0118 62.9863 30.6074C63.9033 32.3815 64.0484 34.7832 63.8711 45.2441C63.6631 57.5071 63.6245 57.7946 61.9541 59.6035C58.8194 62.9971 57.0546 63.3183 41.5352 63.3183C24.8984 63.3183 22.8723 62.8636 20.4717 58.5927C19.1271 56.2009 19 54.9883 19 44.624C19 31.7827 19.5716 29.4239 23.2207 27.1992C24.4616 26.4425 26.4228 25.8227 27.5791 25.8212C29.2039 25.8192 30.1703 25.2094 31.8359 23.1367C33.2186 21.4158 34.664 20.3756 35.8701 20.2324ZM41.5 33.0625C35.6751 33.0625 30.9532 37.7845 30.9531 43.6093C30.9531 49.4342 35.6751 54.1562 41.5 54.1562C47.3249 54.1562 52.0469 49.4342 52.0469 43.6093C52.0468 37.7845 47.3249 33.0625 41.5 33.0625ZM41.5 36.5781C45.3832 36.5781 48.5312 39.7261 48.5312 43.6093C48.5312 47.4926 45.3833 50.6406 41.5 50.6406C37.6167 50.6406 34.4688 47.4926 34.4688 43.6093C34.4688 39.7261 37.6168 36.5781 41.5 36.5781Z",
            fill: "white",
        }),
    });
}
function et() {
    return e.jsxs("svg", {
        width: "35",
        height: "35",
        viewBox: "0 0 35 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            e.jsx("circle", {
                cx: "17.5",
                cy: "17.5",
                r: "6.5",
                stroke: "#F9F9F9",
                strokeWidth: "3",
                fill: "none",
            }),
            e.jsx("line", {
                x1: "23.5",
                y1: "23.5",
                x2: "26.25",
                y2: "26.25",
                stroke: "#F9F9F9",
                strokeWidth: "3",
                strokeLinecap: "round",
            }),
        ],
    });
}
function tt({ isVisible: t, isDismissing: a, label: s }) {
    return !t && !a
        ? null
        : e.jsx("div", {
            className: `audio-vip-popup ${t && !a ? "show" : ""} ${a ? "dismissing" : ""}`,
            id: "audio-vip-popup",
            children: e.jsxs("div", {
                className: "audio-vip-popup-content",
                children: [
                    e.jsx("div", { className: "audio-vip-popup-label", children: s }),
                    e.jsx("div", {
                        className: "audio-vip-popup-icon-container",
                        children: e.jsxs("svg", {
                            className: "audio-vip-popup-icon",
                            width: "64",
                            height: "64",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                e.jsx("path", {
                                    d: "M11 5L6 9H2v6h4l5 4V5z",
                                    fill: "#000000",
                                }),
                                e.jsx("line", {
                                    x1: "19",
                                    y1: "5",
                                    x2: "5",
                                    y2: "19",
                                    stroke: "#000000",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                }),
                            ],
                        }),
                    }),
                    e.jsx("div", {
                        className: "audio-vip-popup-bar",
                        children: Array.from({ length: 16 }).map((r, c) =>
                            e.jsx("div", { className: "audio-vip-popup-bar-segment" }, c),
                        ),
                    }),
                ],
            }),
        });
}
function it({
    isOpen: t,
    imageSrc: a,
    imageId: s,
    onClose: r,
    onGoToCTA: c,
    onShowBlockedPopup: y,
}) {
    const { t: f } = be(),
        [u, d] = i.useState("initial"),
        [h, x] = i.useState(!1),
        T = i.useRef(null);
    i.useEffect(() => {
        t &&
            (ze(s)
                ? (r(),
                    setTimeout(() => {
                        y(
                            "Hazte miembro VIP de STALKEIA APP para poder volver a ver las imágenes del chat",
                        );
                    }, 100))
                : (d("initial"), x(!1)));
    }, [t, s, r, y]);
    const _ = i.useCallback(() => {
        u === "initial"
            ? (d("revealing"),
                x(!0),
                setTimeout(() => {
                    x(!1);
                }, 600),
                setTimeout(() => {
                    (Ze(s), d("blocked"));
                }, 3e3))
            : u === "blocked" && (r(), c());
    }, [u, s, r, c]),
        S = i.useCallback(() => {
            (r(),
                setTimeout(() => {
                    (d("initial"), x(!1));
                }, 300));
        }, [r]),
        R = i.useCallback(
            (I) => {
                I.target === T.current && S();
            },
            [S],
        );
    if (!t) return null;
    const C = [
        "image-fullscreen-bg",
        u === "revealing" ? "revealing" : "",
        u === "blocked" ? "revealing-back" : "",
        h ? "shaking" : "",
    ]
        .filter(Boolean)
        .join(" "),
        k = [
            "image-fullscreen-modal",
            t ? "active" : "",
            u === "revealing" ? "revealing" : "",
            u === "blocked" ? "revealing-back" : "",
        ]
            .filter(Boolean)
            .join(" "),
        p = u === "revealing",
        O = u === "revealing",
        J = u === "revealing";
    return e.jsxs("div", {
        ref: T,
        className: k,
        onClick: R,
        children: [
            e.jsx("img", { src: a, alt: "", className: C }),
            e.jsx("button", {
                type: "button",
                className: `image-fullscreen-back ${J ? "hidden" : ""}`,
                onClick: S,
                "aria-label": "Volver",
                children: e.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: e.jsx("path", {
                        d: "M15 18L9 12L15 6",
                        stroke: "#F9F9F9",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }),
                }),
            }),
            e.jsxs("div", {
                className: `image-fullscreen-content ${p ? "hidden" : ""}`,
                children: [
                    e.jsx("div", {
                        className: "image-fullscreen-icon",
                        children:
                            u === "blocked"
                                ? e.jsxs("svg", {
                                    className: "warning-icon",
                                    width: "27",
                                    height: "27",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        e.jsx("path", {
                                            d: "M12 2L1 21H23L12 2Z",
                                            stroke: "#F9F9F9",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        e.jsx("line", {
                                            x1: "12",
                                            y1: "9",
                                            x2: "12",
                                            y2: "13",
                                            stroke: "#F9F9F9",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                        }),
                                        e.jsx("circle", {
                                            cx: "12",
                                            cy: "16",
                                            r: "1.5",
                                            fill: "#F9F9F9",
                                        }),
                                    ],
                                })
                                : e.jsx("i", { className: "fas fa-eye-slash" }),
                    }),
                    e.jsx("p", {
                        className: "image-fullscreen-text",
                        children:
                            u === "blocked" ? f.chat.blockedContent : f.chat.sensitiveContent,
                    }),
                    e.jsx("p", {
                        className: "image-fullscreen-subtext",
                        children:
                            u === "blocked"
                                ? "Para desbloquear fotos y vídeos censurados, es necesario ser miembro VIP"
                                : "Esta imagen puede contener desnudos y actividad sexual explícita",
                    }),
                ],
            }),
            e.jsxs("div", {
                className: `image-fullscreen-footer ${O ? "hidden" : ""}`,
                children: [
                    e.jsx("div", { className: "image-fullscreen-divider" }),
                    e.jsx("button", {
                        type: "button",
                        className: "image-fullscreen-btn",
                        onClick: _,
                        children: u === "blocked" ? f.chat.becomeVIP : f.chat.viewPhoto,
                    }),
                ],
            }),
        ],
    });
}
function nt({
    message: t,
    isSent: a,
    onShowVIPPopup: s,
    onDismissVIPPopup: r,
    onBlockedAction: c,
    audioIndex: y,
    chatId: f,
}) {
    const [u, d] = i.useState(!1),
        [h, x] = i.useState(0),
        [T, _] = i.useState(!1),
        [S, R] = i.useState("idle"),
        [C] = i.useState(() => ke()),
        k = i.useRef(null),
        p = i.useRef(null),
        O = i.useRef(0),
        I = ((B) => {
            const M = B.split(":"),
                j = parseInt(M[0] || "0"),
                D = parseInt(M[1] || "0");
            return (j * 60 + D) * 1e3;
        })(t.audioDuration || "0:30"),
        G = (B) => {
            const M = Math.floor(B / 1e3),
                j = Math.floor(M / 60),
                D = M % 60;
            return `${j}:${String(D).padStart(2, "0")}`;
        },
        X = Math.max(I - h * I, 0),
        re = G(X),
        V = `chat-${f}_audio-${y}-${t.audioDuration}`,
        Y = typeof window < "u" && localStorage.getItem(V) === "listened";
    i.useEffect(
        () => () => {
            k.current && cancelAnimationFrame(k.current);
        },
        [],
    );
    const se = () => {
        if (u)
            (d(!1),
                (O.current = h * I),
                k.current && (cancelAnimationFrame(k.current), (k.current = null)),
                r());
        else {
            (d(!0),
                _(!0),
                (p.current = Date.now()),
                S === "idle" && h === 0 && (R("failed"), s()),
                typeof window < "u" && localStorage.setItem(V, "listened"));
            const B = () => {
                if (!p.current) {
                    k.current = null;
                    return;
                }
                const M = Date.now() - p.current + O.current,
                    j = Math.min(M / I, 1);
                (x(j),
                    j >= 1
                        ? (d(!1),
                            x(0),
                            _(!1),
                            (O.current = 0),
                            (p.current = null),
                            (k.current = null),
                            r())
                        : (k.current = requestAnimationFrame(B)));
            };
            k.current = requestAnimationFrame(B);
        }
    },
        P = Math.floor(h * C.length);
    return e.jsxs("div", {
        className: "audio-recebido",
        children: [
            e.jsx("button", {
                type: "button",
                className: `audio-recebido-play-btn ${Y ? "listened" : ""}`,
                "aria-label": u ? "Pausar audio" : "Reproducir audio",
                onClick: se,
                children: e.jsx("i", {
                    className: `fas ${u ? "fa-pause" : "fa-play"}`,
                }),
            }),
            e.jsx("div", {
                className: "audio-recebido-waveform",
                children: C.map((B, M) => {
                    const j = M < P,
                        D = { height: `${B}px`, transition: "background-color 0.45s ease" };
                    return (
                        T &&
                        (D.backgroundColor = j
                            ? "#F9F9F9"
                            : a
                                ? "rgba(249, 249, 249, 0.4)"
                                : "rgb(103, 103, 103)"),
                        e.jsx(
                            "div",
                            {
                                className: `audio-recebido-waveform-bar ${T ? "playing" : ""} ${j ? "active" : ""}`,
                                style: D,
                            },
                            M,
                        )
                    );
                }),
            }),
            e.jsx("span", {
                className: "audio-recebido-duration",
                children: u || h > 0 ? re : t.audioDuration,
            }),
            e.jsxs("div", {
                className: "audio-recebido-transcricao",
                onClick: () => {
                    S === "idle" &&
                        (R("transcribing"),
                            setTimeout(() => {
                                (R("failed"),
                                    setTimeout(() => {
                                        c("Transcribir audio");
                                    }, 300));
                            }, 1500));
                },
                style: { cursor: S === "idle" ? "pointer" : "default" },
                children: [
                    S === "idle" && "Ver transcripción",
                    S === "transcribing" && "Transcribiendo...",
                    S === "failed" &&
                    e.jsxs(e.Fragment, {
                        children: [
                            "No se pudo transcribir el mensaje.",
                            e.jsx("br", {}),
                            "Requiere acceso VIP",
                        ],
                    }),
                ],
            }),
        ],
    });
}
function st({ message: t, callTimes: a, onBlockedAction: s }) {
    const r =
        t.callStatus === "missed"
            ? ""
            : t.callStatus === "ended"
                ? "ended"
                : "normal",
        c = t.callType === "voice";
    return e.jsxs("div", {
        className: `message-system ${r} ${c ? "voice" : ""}`,
        children: [
            e.jsxs("div", {
                className: "message-system-content",
                children: [
                    e.jsx("i", {
                        className: t.callType === "video" ? "fas fa-video" : "fas fa-phone",
                    }),
                    e.jsxs("div", {
                        className: "message-system-text-wrapper",
                        children: [
                            e.jsx("span", { children: t.content }),
                            t.callTimeId &&
                            a[t.callTimeId] &&
                            e.jsx("span", {
                                className: "message-system-time",
                                children: a[t.callTimeId],
                            }),
                        ],
                    }),
                ],
            }),
            t.callStatus === "missed" &&
            e.jsx("button", {
                type: "button",
                className: "message-system-btn",
                onClick: () => s("Volver a llamar"),
                children: "Volver a llamar",
            }),
        ],
    });
}
function at({ message: t, onBlockedAction: a, onReelClick: s }) {
    const r = t.hasPlayButton,
        c = !r,
        y = () => {
            r && s && t.imageSrc
                ? s(t.imageSrc)
                : a(r ? "Ver reel" : "Ver historia");
        };
    return e.jsxs("div", {
        className: "story-encaminhado-recebido",
        onClick: y,
        children: [
            e.jsxs("div", {
                className: "story-encaminhado-inner",
                children: [
                    e.jsxs("div", {
                        className: "story-encaminhado-header",
                        children: [
                            e.jsx("img", {
                                src: ae(t.storyAvatar || ""),
                                alt: "",
                                className: "story-encaminhado-avatar",
                                style: c ? { filter: "blur(3px)" } : void 0,
                            }),
                            e.jsx("div", {
                                className: "story-encaminhado-info",
                                children: e.jsx("span", {
                                    className: "story-encaminhado-name",
                                    children: t.storyUsername,
                                }),
                            }),
                        ],
                    }),
                    e.jsx("img", {
                        src: t.imageSrc,
                        alt: "",
                        className: "story-encaminhado-image",
                        style: c ? { filter: "blur(5px)" } : void 0,
                    }),
                    t.hasPlayButton &&
                    e.jsx("div", {
                        className: "story-encaminhado-play-btn",
                        children: e.jsx("svg", {
                            width: "32.5",
                            height: "32.5",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: e.jsx("path", {
                                d: "M8 5 L8 19 L19 12 Z",
                                fill: "#F9F9F9",
                                stroke: "#F9F9F9",
                                strokeWidth: "7",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                            }),
                        }),
                    }),
                    e.jsx("div", {
                        className: "story-encaminhado-clip-icon",
                        children: e.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                e.jsx("defs", {
                                    children: e.jsxs("mask", {
                                        id: `play-mask-${t.id || "clip"}`,
                                        children: [
                                            e.jsx("rect", {
                                                width: "24",
                                                height: "24",
                                                fill: "#F9F9F9",
                                            }),
                                            e.jsx("path", {
                                                d: "M10 8 L10 16 L16 12 Z",
                                                fill: "black",
                                                stroke: "black",
                                                strokeWidth: "2",
                                                strokeLinejoin: "round",
                                                strokeLinecap: "round",
                                            }),
                                        ],
                                    }),
                                }),
                                e.jsx("rect", {
                                    x: "2",
                                    y: "2",
                                    width: "20",
                                    height: "20",
                                    rx: "6",
                                    ry: "6",
                                    fill: "#F9F9F9",
                                    mask: `url(#play-mask-${t.id || "clip"})`,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            t.reaction &&
            e.jsx("div", { className: "message-reaction", children: t.reaction }),
        ],
    });
}
function rt({ message: t, onOpenFullscreen: a, chatId: s }) {
    if (t.isPackImages && t.packImages)
        return e.jsxs("div", {
            className: "message-video-pack",
            children: [
                t.packImages.map((c, y) => {
                    const f = ge(s, t.id, c, y);
                    return e.jsxs(
                        "div",
                        {
                            className: `pack-item ${y > 0 ? "pack-item-overlap" : ""}`,
                            onClick: () => a(c, f),
                            style: { cursor: "pointer" },
                            children: [
                                e.jsx("img", { src: c, alt: "", className: "pack-blurred" }),
                                e.jsx("div", {
                                    className: "pack-sensitive-overlay",
                                    children: e.jsx("div", {
                                        className: "pack-sensitive-content",
                                        children: e.jsx("div", {
                                            className: "pack-sensitive-icon",
                                            children: e.jsx("i", { className: "fas fa-eye-slash" }),
                                        }),
                                    }),
                                }),
                            ],
                        },
                        y,
                    );
                }),
                t.reaction &&
                e.jsx("div", { className: "message-reaction", children: t.reaction }),
            ],
        });
    const r = ge(s, t.id, t.imageSrc || "", 0);
    return e.jsxs("div", {
        className: "message-video",
        onClick: () => a(t.imageSrc || "", r),
        style: { cursor: "pointer" },
        children: [
            e.jsxs("div", {
                className: "message-video-inner",
                children: [
                    e.jsx("img", {
                        src: t.imageSrc,
                        alt: "",
                        className: "video-blurred",
                    }),
                    e.jsx("div", {
                        className: "video-sensitive-overlay",
                        children: e.jsx("div", {
                            className: "video-sensitive-content",
                            children: e.jsx("div", {
                                className: "video-sensitive-icon",
                                children: e.jsx("i", { className: "fas fa-eye-slash" }),
                            }),
                        }),
                    }),
                ],
            }),
            t.reaction &&
            e.jsx("div", { className: "message-reaction", children: t.reaction }),
        ],
    });
}
function ot({
    message: t,
    userPhoto: a,
    onBlockedAction: s,
    onShowVIPPopup: r,
    onDismissVIPPopup: c,
    onOpenFullscreen: y,
    onReelClick: f,
    callTimes: u,
    dynamicContent: d,
    audioIndex: h,
    chatId: x,
    onTouchStart: T,
    onTouchEnd: _,
    onTouchMove: S,
    onContextMenu: R,
}) {
    if (t.type === "date") {
        const O = (t.timeId && d[t.timeId]) || t.content;
        return e.jsx("div", { className: "message-date", children: O });
    }
    if (t.type === "unread_divider")
        return e.jsxs("div", {
            className: "message-unread-divider",
            children: [
                e.jsx("div", { className: "message-unread-line" }),
                e.jsx("span", {
                    className: "message-unread-text",
                    children: "Mensajes nuevos",
                }),
                e.jsx("div", { className: "message-unread-line" }),
            ],
        });
    if (t.type === "system_call")
        return e.jsx(st, { message: t, callTimes: u, onBlockedAction: s });
    const C = t.direction === "sent",
        k = t.type === "heart";
    let p = t.content || "";
    return (
        t.dynamicType &&
        d[t.dynamicType] &&
        (t.dynamicType === "firstName"
            ? (p = d.firstName + p)
            : t.dynamicType === "userSpiedName"
                ? t.content === "Por favor "
                    ? (p = "Por favor " + d.userSpiedName)
                    : t.content === ""
                        ? (p = d.userSpiedName + "???")
                        : t.content === "Buenos días "
                            ? (p = "Buenos días " + (d.userSpiedName || "bb"))
                            : (p = t.content + d.userSpiedName)
                : t.dynamicType === "date2WeeksAhead"
                    ? (p = d.date2WeeksAhead || "")
                    : t.dynamicType === "city" &&
                    (p.includes("aquí")
                        ? (p = p.replace("aquí", `en ${d.city || "casa"}, aquí`))
                        : (p = p.replace(" en ", ` em ${d.city || "casa"} `)))),
        k
            ? e.jsxs("div", {
                className: `message ${C ? "sent" : "received"} message-heart`,
                children: [
                    !C &&
                    e.jsx("img", {
                        src: ae(a),
                        alt: "",
                        className: "message-avatar",
                    }),
                    e.jsx("div", {
                        className: "message-bubble",
                        children: e.jsx("div", {
                            className: "message-content-heart",
                            children: "❤️",
                        }),
                    }),
                ],
            })
            : e.jsxs("div", {
                className: `message ${C ? "sent" : "received"} ${t.showTime ? "show-time" : ""}`,
                onTouchStart: T,
                onTouchEnd: _,
                onTouchMove: S,
                onContextMenu: R,
                children: [
                    !C &&
                    e.jsx("img", {
                        src: ae(a),
                        alt: "",
                        className: "message-avatar",
                    }),
                    e.jsxs("div", {
                        className: "message-bubble",
                        children: [
                            t.type === "reply" &&
                            e.jsxs("div", {
                                className: "message-reply",
                                children: [
                                    e.jsx("div", {
                                        className: "reply-label",
                                        children: t.replyLabel,
                                    }),
                                    e.jsxs("div", {
                                        className: "reply-content-wrapper",
                                        children: [
                                            e.jsx("div", { className: "reply-line" }),
                                            e.jsx("div", {
                                                className: `message-content ${C ? "reply-bg-purple-light" : "reply-bg-purple"}`,
                                                children: t.replyTo,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (t.type === "text" || t.type === "reply") &&
                            e.jsxs("div", {
                                className: "message-content",
                                style: { userSelect: "none" },
                                children: [
                                    p,
                                    t.blurredContent &&
                                    e.jsx("span", {
                                        className: "blur-word",
                                        children: t.blurredContent,
                                    }),
                                ],
                            }),
                            t.type === "audio" &&
                            e.jsx(nt, {
                                message: t,
                                isSent: C,
                                onShowVIPPopup: r,
                                onDismissVIPPopup: c,
                                onBlockedAction: s,
                                audioIndex: h,
                                chatId: x,
                            }),
                            t.type === "image" &&
                            t.isSensitive &&
                            e.jsx(rt, { message: t, onOpenFullscreen: y, chatId: x }),
                            t.type === "forwarded_story" &&
                            e.jsx(at, { message: t, onBlockedAction: s, onReelClick: f }),
                            t.reaction &&
                            t.type !== "forwarded_story" &&
                            t.type !== "image" &&
                            e.jsx("div", {
                                className: "message-reaction",
                                onClick: (O) => {
                                    (O.stopPropagation(), s("Reaccionar al mensaje"));
                                },
                                style: { cursor: "pointer" },
                                children: t.reaction,
                            }),
                        ],
                    }),
                ],
            })
    );
}
const ct = {
    1: [
        {
            id: "bh1",
            direction: "received",
            type: "text",
            content: "Amor, ¿viste ",
            blurredPart: "** ** *** ** ****",
        },
        {
            id: "bh2",
            direction: "sent",
            type: "text",
            content: "Sí, lo acabo de ver jajaja",
        },
        {
            id: "bh3",
            direction: "received",
            type: "audio",
            audioDuration: "0:17",
        },
        {
            id: "bh4",
            direction: "sent",
            type: "text",
            content: "Cuánto te extraño ",
            blurredPart: "** ** ** ***",
        },
        {
            id: "bh5",
            direction: "received",
            type: "text",
            content: "Yo también te extraño ",
            blurredPart: "** * ** ** ***",
        },
        { id: "bh6", direction: "sent", type: "audio", audioDuration: "0:23" },
        { id: "bh7", direction: "received", type: "heart" },
        {
            id: "bh8",
            direction: "sent",
            type: "text",
            content: "Ven aquí entonces ",
            blurredPart: "** ** * ** ****",
        },
        {
            id: "bh9",
            direction: "received",
            type: "text",
            content: "",
            blurredPart: "** ** ** ** ** ** ** ** ***",
        },
        { id: "bh10", direction: "sent", type: "text", content: "😍😍" },
        {
            id: "bh11",
            direction: "received",
            type: "audio",
            audioDuration: "0:44",
        },
        {
            id: "bh12",
            direction: "sent",
            type: "text",
            content: "Cuenta con ello, amor",
        },
    ],
    2: [
        {
            id: "bh1",
            direction: "sent",
            type: "text",
            content: "Buenos días ",
            blurredPart: "** ** **",
        },
        {
            id: "bh2",
            direction: "received",
            type: "text",
            content: "Buenos días, amor ❤️",
        },
        { id: "bh3", direction: "sent", type: "audio", audioDuration: "0:08" },
        {
            id: "bh4",
            direction: "received",
            type: "text",
            content: "Hagamos una llamada ",
            blurredPart: "** ** ** **",
        },
        { id: "bh5", direction: "sent", type: "text", content: "¿Ahoraaa?" },
        {
            id: "bh6",
            direction: "received",
            type: "text",
            content: "Sí, ven pronto",
        },
        {
            id: "bh7",
            direction: "sent",
            type: "text",
            content: "Estoy ",
            blurredPart: "** ** ** ** *** **",
        },
        {
            id: "bh8",
            direction: "received",
            type: "audio",
            audioDuration: "0:31",
        },
        {
            id: "bh9",
            direction: "received",
            type: "text",
            content: "jajaja ",
            blurredPart: "** ** ** ***",
        },
        { id: "bh10", direction: "sent", type: "heart" },
        {
            id: "bh11",
            direction: "sent",
            type: "text",
            content: "Vuelve a llamar ",
            blurredPart: "** ** ***",
        },
        {
            id: "bh12",
            direction: "received",
            type: "text",
            content: "Espera ",
            blurredPart: "** ** ** ** ****",
        },
    ],
    3: [
        {
            id: "bh1",
            direction: "received",
            type: "text",
            content: "Hola ",
            blurredPart: "** ** ** ** ***",
        },
        { id: "bh2", direction: "sent", type: "text", content: "Holaa" },
        {
            id: "bh3",
            direction: "received",
            type: "text",
            content: "Tenemos que hablar",
        },
        { id: "bh4", direction: "sent", type: "audio", audioDuration: "1:12" },
        {
            id: "bh5",
            direction: "received",
            type: "text",
            content: "En serio ",
            blurredPart: "** ** ** ** ** ** ***",
        },
        {
            id: "bh6",
            direction: "received",
            type: "audio",
            audioDuration: "0:38",
        },
        {
            id: "bh7",
            direction: "sent",
            type: "text",
            content: "Está bien ",
            blurredPart: "** ** ***",
        },
        {
            id: "bh8",
            direction: "received",
            type: "text",
            content: "",
            blurredPart: "** ** ** *** ** ** ** ***",
        },
        { id: "bh9", direction: "sent", type: "text", content: "Lo sé" },
        { id: "bh10", direction: "received", type: "heart" },
        {
            id: "bh11",
            direction: "sent",
            type: "text",
            content: "",
            blurredPart: "** ** ** *** ** **",
        },
        { id: "bh12", direction: "received", type: "text", content: "💔" },
    ],
    4: [
        {
            id: "bh1",
            direction: "received",
            type: "text",
            content: "Oye ",
            blurredPart: "** ** ** ***",
        },
        { id: "bh2", direction: "sent", type: "text", content: "Hola, dime" },
        {
            id: "bh3",
            direction: "received",
            type: "audio",
            audioDuration: "0:52",
        },
        { id: "bh4", direction: "sent", type: "text", content: "¿En serio?" },
        {
            id: "bh5",
            direction: "received",
            type: "text",
            content: "Sí, amigo ",
            blurredPart: "** ** ** ** ***",
        },
        { id: "bh6", direction: "sent", type: "audio", audioDuration: "0:19" },
        { id: "bh7", direction: "received", type: "text", content: "Exacto jajaja" },
        {
            id: "bh8",
            direction: "sent",
            type: "text",
            content: "Te lo advertí ",
            blurredPart: "** ** ** *** **",
        },
        {
            id: "bh9",
            direction: "received",
            type: "text",
            content: "Lo sé, lo sé",
        },
        {
            id: "bh10",
            direction: "sent",
            type: "text",
            content: "Hablamos después",
        },
        {
            id: "bh11",
            direction: "received",
            type: "audio",
            audioDuration: "0:27",
        },
        { id: "bh12", direction: "sent", type: "text", content: "👍" },
    ],
    5: [
        {
            id: "bh1",
            direction: "received",
            type: "text",
            content: "Amigo, mira esto jajaja",
        },
        { id: "bh2", direction: "sent", type: "text", content: "JAJAJAJA" },
        {
            id: "bh3",
            direction: "received",
            type: "text",
            content: "",
            blurredPart: "** ** ** *** ** ** **",
        },
        { id: "bh4", direction: "sent", type: "text", content: "Ni me digas jajaja" },
        {
            id: "bh5",
            direction: "received",
            type: "audio",
            audioDuration: "0:14",
        },
        { id: "bh6", direction: "sent", type: "text", content: "😂😂😂" },
        {
            id: "bh7",
            direction: "received",
            type: "text",
            content: "¿Viste ",
            blurredPart: "** ** *** ** ***",
        },
        { id: "bh8", direction: "sent", type: "text", content: "Sí, lo vi jajajaja" },
        {
            id: "bh9",
            direction: "received",
            type: "text",
            content: "",
            blurredPart: "** ** ** ** ** ***",
        },
        { id: "bh10", direction: "sent", type: "audio", audioDuration: "0:06" },
        { id: "bh11", direction: "received", type: "heart" },
        {
            id: "bh12",
            direction: "sent",
            type: "text",
            content: "Después mándame más",
        },
    ],
},
    dt = [
        { id: "bh1", direction: "received", type: "text", content: "Hola, ¿cómo estás?" },
        { id: "bh2", direction: "sent", type: "text", content: "Todo bien, ¿y tú?" },
        { id: "bh3", direction: "received", type: "audio", audioDuration: "0:15" },
        {
            id: "bh4",
            direction: "sent",
            type: "text",
            content: "",
            blurredPart: "** ** ** *** ** **",
        },
        {
            id: "bh5",
            direction: "received",
            type: "text",
            content: "Hmm ",
            blurredPart: "** ** ***",
        },
        { id: "bh6", direction: "sent", type: "text", content: "Así es" },
        {
            id: "bh7",
            direction: "received",
            type: "text",
            content: "",
            blurredPart: "** ** ** ** ** ***",
        },
        { id: "bh8", direction: "sent", type: "audio", audioDuration: "0:22" },
        { id: "bh9", direction: "received", type: "heart" },
        { id: "bh10", direction: "sent", type: "text", content: "Vale, hasta luego" },
        { id: "bh11", direction: "received", type: "text", content: "Hasta luego ❤️" },
        { id: "bh12", direction: "sent", type: "text", content: "😊" },
    ];
function lt({ msg: t }) {
    const a = i.useRef(ke());
    if (t.type === "heart")
        return e.jsxs("div", {
            className: `message ${t.direction} heart blurred-history-msg`,
            children: [
                t.direction === "received" &&
                e.jsx("div", {
                    className: "message-avatar",
                    style: {
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "#333",
                        flexShrink: 0,
                    },
                }),
                e.jsx("div", {
                    className: "message-bubble",
                    children: e.jsx("div", {
                        className: "message-content-heart",
                        children: "❤️",
                    }),
                }),
            ],
        });
    if (t.type === "audio")
        return e.jsxs("div", {
            className: `message ${t.direction} blurred-history-msg`,
            children: [
                t.direction === "received" &&
                e.jsx("div", {
                    className: "message-avatar",
                    style: {
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "#333",
                        flexShrink: 0,
                    },
                }),
                e.jsx("div", {
                    className: "message-bubble",
                    children: e.jsxs("div", {
                        className: "audio-recebido",
                        children: [
                            e.jsx("button", {
                                type: "button",
                                className: "audio-recebido-play-btn",
                                "aria-label": "Reproducir audio",
                                disabled: !0,
                                children: e.jsx("i", { className: "fas fa-play" }),
                            }),
                            e.jsx("div", {
                                className: "audio-recebido-waveform",
                                children: a.current.map((r, c) =>
                                    e.jsx(
                                        "div",
                                        {
                                            className: "audio-recebido-waveform-bar",
                                            style: { height: `${r}px` },
                                        },
                                        c,
                                    ),
                                ),
                            }),
                            e.jsx("span", {
                                className: "audio-recebido-duration",
                                children: t.audioDuration || "0:12",
                            }),
                        ],
                    }),
                }),
            ],
        });
    const s = (t.content || "") + (t.blurredPart ? t.blurredPart : "");
    return e.jsxs("div", {
        className: `message ${t.direction} blurred-history-msg`,
        children: [
            t.direction === "received" &&
            e.jsx("div", {
                className: "message-avatar",
                style: {
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#333",
                    flexShrink: 0,
                },
            }),
            e.jsxs("div", {
                className: "message-bubble",
                children: [
                    e.jsx("div", { className: "message-content", children: s }),
                    t.reaction &&
                    e.jsx("div", {
                        className: "message-reaction",
                        children: t.reaction,
                    }),
                ],
            }),
        ],
    });
}
function ut({ config: t }) {
    const a = fe(),
        { t: s } = be(),
        r = i.useRef(null),
        c = i.useRef(null),
        y = i.useRef(null),
        f = i.useRef(!1),
        [u, d] = i.useState(""),
        [h, x] = i.useState("/images/avatars/perfil-sem-foto.jpeg"),
        [T, _] = i.useState(t.defaultStatus),
        [S, R] = i.useState({}),
        [C, k] = i.useState({}),
        [p, O] = i.useState(!1),
        [J, I] = i.useState({ isOpen: !1, action: "" }),
        [G, X] = i.useState(!1),
        [re, V] = i.useState(!1),
        [Y, se] = i.useState({ isOpen: !1, imageSrc: "", imageId: "" }),
        [P, B] = i.useState(""),
        [M, j] = i.useState([]),
        [D, ue] = i.useState({ isOpen: !1, position: { top: 0, left: 0 } }),
        [Q, he] = i.useState({ isOpen: !1, position: { top: 0, left: 0 } }),
        [H, pe] = i.useState(null),
        K = i.useRef(null),
        [me, ye] = i.useState({ isOpen: !1, imageSrc: "" }),
        ee = i.useRef(null),
        je = i.useCallback(() => {
            (V(!1),
                X(!0),
                ee.current && clearTimeout(ee.current),
                (ee.current = setTimeout(() => {
                    (V(!0),
                        setTimeout(() => {
                            (X(!1), V(!1));
                        }, 350));
                }, 5e3)));
        }, []),
        we = i.useCallback(() => {
            G &&
                (ee.current && clearTimeout(ee.current),
                    V(!0),
                    setTimeout(() => {
                        (X(!1), V(!1));
                    }, 350));
        }, [G]),
        Ne = i.useCallback((n) => {
            (ye({ isOpen: !0, imageSrc: n }),
                setTimeout(() => {
                    (ye({ isOpen: !1, imageSrc: "" }),
                        setTimeout(() => {
                            I({ isOpen: !0, action: "Ver reel" });
                        }, 100));
                }, 600));
        }, []);
    (i.useEffect(() => {
        const n = sessionStorage.getItem(`${t.sessionKey}-user-name`),
            l = sessionStorage.getItem(`${t.sessionKey}-user-photo`);
        (n && d(n), l && x(l));
        const m = localStorage.getItem(t.readKey);
        O(m === "true");
        const w = localStorage.getItem("instagram_profile");
        let g = "",
            F = "";
        if (w)
            try {
                const o = JSON.parse(w);
                (o.full_name
                    ? ((g = o.full_name.split(" ")[0]), (F = g))
                    : o.username && ((g = o.username), (F = g)),
                    g && (g = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase()));
            } catch {
                console.warn("Error parsing profile data");
            }
        if (t.id === 2) {
            const o = t.storageTimeKey,
                b = localStorage.getItem(o);
            let v = new Date();
            b
                ? (v = new Date(parseInt(b)))
                : ((v = new Date(Date.now() - 7200 * 1e3)),
                    localStorage.setItem(o, v.getTime().toString()));
            const N = (A) => {
                const Z = String(A.getHours()).padStart(2, "0"),
                    de = String(A.getMinutes()).padStart(2, "0");
                return `${Z}:${de}`;
            };
            R({
                callTime1: N(new Date(v.getTime() - 660 * 1e3)),
                callTime2: N(new Date(v.getTime() - 540 * 1e3)),
                callTime3: N(new Date(v.getTime() - 6900 * 1e3)),
            });
        }
        if (t.id === 3) {
            const o = new Date();
            o.setDate(o.getDate() + 2);
            const b = o.getDate(),
                N = [
                    "domingo",
                    "lunes",
                    "martes",
                    "miércoles",
                    "jueves",
                    "viernes",
                    "sábado",
                ][o.getDay()],
                A = new Date();
            A.setDate(A.getDate() - 27);
            const Z = [
                "JAN",
                "FEB",
                "MAR",
                "ABR",
                "MAY",
                "JUN",
                "JUL",
                "AGO",
                "SEP",
                "OCT",
                "NOV",
                "DIC",
            ];
            k((de) => ({
                ...de,
                date27DaysAgo: `${A.getDate()} DE ${Z[A.getMonth()]}, ${String(A.getHours()).padStart(2, "0")}:${String(A.getMinutes()).padStart(2, "0")}`,
                date2WeeksAhead: `El día ${b} ${N} debo volver a casa`,
            }));
        }
        const U = t.storageTimeKey,
            ne = localStorage.getItem(U);
        let z = "";
        if (ne) {
            const o = new Date(parseInt(ne)),
                b = String(o.getHours()).padStart(2, "0"),
                v = String(o.getMinutes()).padStart(2, "0");
            z = `${b}:${v}`;
        } else {
            const o = new Date(),
                b = String(o.getHours()).padStart(2, "0"),
                v = String(o.getMinutes()).padStart(2, "0");
            ((z = `${b}:${v}`), localStorage.setItem(U, o.getTime().toString()));
        }
        let $ = "casa";
        try {
            const o = localStorage.getItem("nearby_cities");
            if (o) {
                const b = JSON.parse(o);
                b.length > 0 && ($ = b[0]);
            }
        } catch { }
        ($ === "casa" && ($ = localStorage.getItem("user_city") || "casa"),
            k((o) => ({
                ...o,
                firstName: g,
                userSpiedName: F,
                lastMessageTime: z,
                city: $,
            })));
        const W = () => {
            const o = localStorage.getItem(U);
            if (o) {
                const b = Math.floor((Date.now() - parseInt(o)) / 1e3),
                    v = Math.floor(b / 60);
                if (v === 0) _("En línea");
                else if (v < 60) _(`Online há ${v} min`);
                else {
                    const N = Math.floor(v / 60);
                    _(`Online há ${N} h`);
                }
            }
        };
        W();
        const E = setInterval(W, 6e4);
        return () => clearInterval(E);
    }, [t]),
        i.useEffect(() => {
            setTimeout(() => {
                r.current?.scrollIntoView({ behavior: "auto" });
            }, 100);
        }, []),
        i.useEffect(() => {
            const n = () => {
                localStorage.setItem(t.readKey, "true");
            };
            return (
                window.addEventListener("beforeunload", n),
                () => {
                    (n(), window.removeEventListener("beforeunload", n));
                }
            );
        }, [t.readKey]));
    const Se = ct[t.id] || dt;
    i.useEffect(() => {
        const n = c.current;
        if (!n) return;
        const l = () => {
            if (f.current) return;
            const m = y.current;
            if (!m) return;
            const w = m.getBoundingClientRect(),
                g = n.getBoundingClientRect(),
                F = w.top + w.height * 0.5;
            F > g.top &&
                F < g.bottom &&
                ((f.current = !0),
                    I({ isOpen: !0, action: s.chat.viewFullHistory }),
                    setTimeout(() => {
                        r.current?.scrollIntoView({ behavior: "smooth" });
                    }, 400));
        };
        return (
            n.addEventListener("scroll", l, { passive: !0 }),
            () => n.removeEventListener("scroll", l)
        );
    }, []);
    const Ce = i.useCallback(() => {
        (localStorage.setItem(t.readKey, "true"), a("/direct"));
    }, [t.readKey, a]),
        L = i.useCallback((n) => {
            I({ isOpen: !0, action: n });
        }, []),
        Te = i.useCallback(() => {
            I({ isOpen: !1, action: "" });
        }, []),
        xe = i.useCallback(() => {
            a("/cta");
        }, [a]),
        Ie = i.useCallback((n, l) => {
            se({ isOpen: !0, imageSrc: n, imageId: l });
        }, []),
        Pe = i.useCallback(() => {
            se((n) => ({ ...n, isOpen: !1 }));
        }, []),
        Me = i.useCallback((n) => {
            I({ isOpen: !0, action: n });
        }, []),
        oe = i.useCallback(() => {
            const n = P.trim();
            if (!n) return;
            const l = `sent-${Date.now()}`;
            (j((m) => [...m, { id: l, text: n, showError: !1, showExpanded: !1 }]),
                B(""),
                setTimeout(() => {
                    r.current?.scrollIntoView({ behavior: "smooth" });
                }, 100),
                setTimeout(() => {
                    j((m) => m.map((w) => (w.id === l ? { ...w, showError: !0 } : w)));
                }, 1e3));
        }, [P]),
        De = i.useCallback(() => {
            const n = `sent-heart-${Date.now()}`;
            (j((l) => [
                ...l,
                { id: n, text: "❤️", isHeart: !0, showError: !1, showExpanded: !1 },
            ]),
                setTimeout(() => {
                    r.current?.scrollIntoView({ behavior: "smooth" });
                }, 100),
                setTimeout(() => {
                    j((l) => l.map((m) => (m.id === n ? { ...m, showError: !0 } : m)));
                }, 1e3));
        }, []);
    i.useCallback((n) => {
        j((l) =>
            l.map((m) => (m.id === n ? { ...m, showExpanded: !m.showExpanded } : m)),
        );
    }, []);
    const Le = i.useCallback(
        (n) => {
            n.key === "Enter" && P.trim() && (n.preventDefault(), oe());
        },
        [P, oe],
    ),
        ce = i.useCallback((n, l) => {
            const F = window.innerHeight,
                U = window.innerWidth,
                ne = 220,
                z = 280,
                $ = 12,
                W = n.querySelector(".message-bubble"),
                E = W ? W.getBoundingClientRect() : n.getBoundingClientRect(),
                o = n.classList.contains("sent");
            let b, v;
            o
                ? ((b = Math.max($, E.right - ne)), (v = Math.max($, E.right - z)))
                : ((b = Math.min(E.left, U - ne - $)),
                    (v = Math.min(E.left, U - z - $)));
            let N = E.top;
            const A = N + E.height + 8 + 250;
            A > F - 16 && (N -= A - F + 16);
            const Z = N - 8 - 56;
            (Z < 8 && (N += 8 - Z),
                pe({
                    html: W ? W.innerHTML : n.innerHTML,
                    rect: { top: N, left: E.left, width: E.width, height: E.height },
                    isSent: o,
                }),
                ue({ isOpen: !0, position: { top: N - 8 - 56, left: v } }),
                he({ isOpen: !0, position: { top: N + E.height + 8, left: b } }));
        }, []),
        Ee = i.useCallback(
            (n) => {
                const l = n.touches[0],
                    m = n.currentTarget;
                K.current = setTimeout(() => {
                    ce(m, l.clientX);
                }, 500);
            },
            [ce],
        ),
        Ae = i.useCallback(() => {
            K.current && (clearTimeout(K.current), (K.current = null));
        }, []),
        Oe = i.useCallback(() => {
            K.current && (clearTimeout(K.current), (K.current = null));
        }, []),
        te = i.useCallback(() => {
            (ue({ isOpen: !1, position: { top: 0, left: 0 } }),
                he({ isOpen: !1, position: { top: 0, left: 0 } }),
                pe(null));
        }, []),
        q = i.useCallback(
            (n) => {
                (te(), L("Reaccionar al mensaje"));
            },
            [te, L],
        ),
        ie = i.useCallback(
            (n) => {
                if ((te(), n === "baixar")) {
                    const l = document.createElement("a");
                    ((l.href = "/images/screenshots/quereracessovip.png"),
                        (l.download = "download.png"),
                        document.body.appendChild(l),
                        l.click(),
                        document.body.removeChild(l));
                } else L(n);
            },
            [te, L],
        ),
        ve = t.messages.filter((n) => !(n.type === "unread_divider" && p));
    return e.jsxs("div", {
        className: "chat-area",
        children: [
            e.jsxs("div", {
                className: "chat-header",
                children: [
                    e.jsxs("div", {
                        className: "chat-header-left",
                        children: [
                            e.jsx("button", {
                                type: "button",
                                onClick: Ce,
                                className: "back-button",
                                "aria-label": "Volver",
                                children: e.jsx(Ge, {}),
                            }),
                            e.jsxs("div", {
                                className: "chat-user-info",
                                children: [
                                    e.jsx("button", {
                                        type: "button",
                                        className: "chat-avatar-btn",
                                        "aria-label": "Avatar del usuario",
                                        children: e.jsx("span", {
                                            className: "chat-avatar-gradient",
                                            children: e.jsx("span", {
                                                className: "chat-avatar-inner",
                                                children: e.jsx("img", {
                                                    src: ae(h),
                                                    alt: "",
                                                    className: "chat-avatar-img",
                                                    loading: "lazy",
                                                    width: "40",
                                                    height: "40",
                                                }),
                                            }),
                                        }),
                                    }),
                                    e.jsxs("button", {
                                        type: "button",
                                        className: "chat-name-btn",
                                        children: [
                                            e.jsx("span", {
                                                className: "chat-user-name",
                                                children: Je(u),
                                            }),
                                            e.jsx("span", {
                                                className: "chat-user-status",
                                                children: T,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "chat-header-right",
                        children: [
                            e.jsx("button", {
                                type: "button",
                                className: "header-icon-btn",
                                onClick: () => L("Llamada de audio"),
                                children: e.jsx(Xe, {}),
                            }),
                            e.jsx("button", {
                                type: "button",
                                className: "header-icon-btn",
                                onClick: () => L("Videollamada"),
                                children: e.jsx(Ye, {}),
                            }),
                        ],
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "chat-messages",
                id: "chatMessages",
                ref: c,
                children: [
                    e.jsx("div", {
                        ref: y,
                        className: "blurred-history-section",
                        children: Se.map((n) => e.jsx(lt, { msg: n }, `blur-${n.id}`)),
                    }),
                    ve.map((n, l) => {
                        const m =
                            ve.slice(0, l + 1).filter((g) => g.type === "audio").length - 1,
                            w = !["date", "unread_divider", "system_call"].includes(n.type);
                        return e.jsx(
                            ot,
                            {
                                message: n,
                                userPhoto: h,
                                onBlockedAction: L,
                                onShowVIPPopup: je,
                                onDismissVIPPopup: we,
                                onOpenFullscreen: Ie,
                                onReelClick: Ne,
                                callTimes: S,
                                dynamicContent: C,
                                audioIndex: n.type === "audio" ? m : 0,
                                chatId: t.id,
                                onTouchStart: w ? Ee : void 0,
                                onTouchEnd: w ? Ae : void 0,
                                onTouchMove: w ? Oe : void 0,
                                onContextMenu: w
                                    ? (g) => {
                                        (g.preventDefault(), ce(g.currentTarget, g.clientX));
                                    }
                                    : void 0,
                            },
                            n.id,
                        );
                    }),
                    M.map((n) =>
                        e.jsx(
                            "div",
                            {
                                className: `message sent ${n.isHeart ? "message-heart" : ""}`,
                                style: { position: "relative" },
                                children: e.jsxs("div", {
                                    className: "message-bubble",
                                    children: [
                                        n.isHeart
                                            ? e.jsx("div", {
                                                className: "message-content-heart",
                                                children: "❤️",
                                            })
                                            : e.jsx("div", {
                                                className: "message-content",
                                                children: n.text,
                                            }),
                                        n.showError &&
                                        e.jsxs("div", {
                                            className: "message-error-text",
                                            children: [
                                                e.jsx("span", {
                                                    style: { color: "rgb(220, 38, 38)" },
                                                    children: s.chat.failedToSend,
                                                }),
                                                " ",
                                                e.jsx("span", {
                                                    className: "message-error-link",
                                                    onClick: () => L("Enviar mensaje"),
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "rgb(220, 38, 38)",
                                                    },
                                                    children: s.chat.learnMore,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            },
                            n.id,
                        ),
                    ),
                    e.jsx("div", { ref: r }),
                ],
            }),
            e.jsx("div", {
                className: "message-input-container",
                children: e.jsxs("div", {
                    className: "message-input-wrapper",
                    children: [
                        e.jsx("div", {
                            className: `message-input-icon${P.trim() ? " no-bg" : ""}`,
                            onClick: () => L(P.trim() ? "Buscar" : "Cámara"),
                            children: P.trim() ? e.jsx(et, {}) : e.jsx(Qe, {}),
                        }),
                        e.jsx("input", {
                            type: "text",
                            placeholder: s.chat.messagePlaceholder,
                            className: "message-input",
                            value: P,
                            onChange: (n) => B(n.target.value),
                            onKeyPress: Le,
                        }),
                        e.jsxs("div", {
                            className: "message-input-actions",
                            children: [
                                !P.trim() &&
                                e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsx("div", {
                                            className: "input-action-icon",
                                            onClick: () => L("Enviar audio"),
                                            children: e.jsxs("svg", {
                                                "aria-label": "Clip de voz",
                                                className: "input-icon-img",
                                                fill: "currentColor",
                                                height: "22",
                                                role: "img",
                                                viewBox: "0 0 24 24",
                                                width: "22",
                                                children: [
                                                    e.jsx("title", { children: "Clip de voz" }),
                                                    e.jsx("path", {
                                                        d: "M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                    e.jsx("line", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        x1: "12",
                                                        x2: "12",
                                                        y1: "19.068",
                                                        y2: "22",
                                                    }),
                                                    e.jsx("line", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        x1: "8.706",
                                                        x2: "15.104",
                                                        y1: "22",
                                                        y2: "22",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx("div", {
                                            className: "input-action-icon",
                                            onClick: () => L("Enviar foto"),
                                            children: e.jsxs("svg", {
                                                "aria-label": "Añadir foto o vídeo",
                                                className: "input-icon-img",
                                                fill: "currentColor",
                                                height: "22",
                                                role: "img",
                                                viewBox: "0 0 24 24",
                                                width: "22",
                                                children: [
                                                    e.jsx("title", {
                                                        children: "Añadir foto o vídeo",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z",
                                                        fillRule: "evenodd",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx("div", {
                                            className: "input-action-icon",
                                            onClick: () => L("Enviar sticker"),
                                            children: e.jsxs("svg", {
                                                "aria-label": "Elegir un GIF o un sticker",
                                                className: "input-icon-img",
                                                fill: "currentColor",
                                                height: "22",
                                                role: "img",
                                                viewBox: "0 0 24 24",
                                                width: "22",
                                                children: [
                                                    e.jsx("title", {
                                                        children: "Elegir un GIF o un sticker",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M13.11 22H7.416A5.417 5.417 0 0 1 2 16.583V7.417A5.417 5.417 0 0 1 7.417 2h9.166A5.417 5.417 0 0 1 22 7.417v5.836a2.083 2.083 0 0 1-.626 1.488l-6.808 6.664A2.083 2.083 0 0 1 13.11 22Z",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                    e.jsx("circle", {
                                                        cx: "8.238",
                                                        cy: "9.943",
                                                        r: "1.335",
                                                    }),
                                                    e.jsx("circle", {
                                                        cx: "15.762",
                                                        cy: "9.943",
                                                        r: "1.335",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M15.174 15.23a4.887 4.887 0 0 1-6.937-.301",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M22 10.833v1.629a1.25 1.25 0 0 1-1.25 1.25h-1.79a5.417 5.417 0 0 0-5.417 5.417v1.62a1.25 1.25 0 0 1-1.25 1.25H9.897",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx("div", {
                                            className: "input-action-icon",
                                            onClick: De,
                                            children: e.jsxs("svg", {
                                                "aria-label": "Me gusta",
                                                className: "input-icon-img",
                                                fill: "currentColor",
                                                height: "22",
                                                role: "img",
                                                viewBox: "0 0 24 24",
                                                width: "22",
                                                children: [
                                                    e.jsx("title", { children: "Me gusta" }),
                                                    e.jsx("path", {
                                                        d: "M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                P.trim() &&
                                e.jsx("div", {
                                    className: "input-action-icon input-send-icon",
                                    onClick: oe,
                                    children: e.jsx("img", {
                                        src: "/images/screenshots/enviar-mensagen.png",
                                        alt: "Enviar",
                                        className: "input-icon-img input-send-icon-svg",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (D.isOpen || Q.isOpen) &&
            e.jsx("div", { className: "menus-overlay show", onClick: te }),
            D.isOpen &&
            e.jsxs("div", {
                className: "quick-reactions show",
                style: { top: D.position.top, left: D.position.left },
                children: [
                    e.jsx("span", {
                        className: "reaction-emoji",
                        onClick: () => q("❤️"),
                        children: "❤️",
                    }),
                    e.jsx("span", {
                        className: "reaction-emoji",
                        onClick: () => q("😂"),
                        children: "😂",
                    }),
                    e.jsx("span", {
                        className: "reaction-emoji",
                        onClick: () => q("😈"),
                        children: "😈",
                    }),
                    e.jsx("span", {
                        className: "reaction-emoji",
                        onClick: () => q("🤤"),
                        children: "🤤",
                    }),
                    e.jsx("span", {
                        className: "reaction-emoji",
                        onClick: () => q("😡"),
                        children: "😡",
                    }),
                    e.jsx("span", {
                        className: "reaction-emoji",
                        onClick: () => q("🔥"),
                        children: "🔥",
                    }),
                ],
            }),
            H &&
            (D.isOpen || Q.isOpen) &&
            e.jsx("div", {
                style: {
                    position: "fixed",
                    top: H.rect.top,
                    right: H.isSent ? 16 : void 0,
                    left: H.isSent ? void 0 : H.rect.left,
                    width: H.rect.width,
                    zIndex: 1e3,
                    pointerEvents: "none",
                    filter: "blur(2px)",
                    opacity: 0.9,
                },
                children: e.jsx("div", {
                    style: {
                        background: H.isSent ? "rgb(88, 64, 174)" : "rgb(38, 38, 38)",
                        borderRadius: "18px",
                        padding: "8px 12px",
                        color: "#F9F9F9",
                        fontSize: "14.8px",
                        fontWeight: 300,
                        lineHeight: "1.35",
                        overflow: "hidden",
                    },
                    dangerouslySetInnerHTML: { __html: H.html },
                }),
            }),
            Q.isOpen &&
            e.jsxs("div", {
                className: "context-menu show",
                style: { top: Q.position.top, left: Q.position.left },
                children: [
                    e.jsxs("div", {
                        className: "context-item",
                        onClick: () => ie("Responder al mensaje"),
                        children: [
                            e.jsx("svg", {
                                fill: "currentColor",
                                height: "18",
                                viewBox: "0 0 24 24",
                                width: "18",
                                children: e.jsx("path", {
                                    d: "M14 8.999H4.413l5.294-5.292a1 1 0 1 0-1.414-1.414l-7 6.998c-.014.014-.019.033-.032.048A.933.933 0 0 0 1 9.998V10c0 .027.013.05.015.076a.907.907 0 0 0 .282.634l6.996 6.998a1 1 0 0 0 1.414-1.414L4.415 11H14a7.008 7.008 0 0 1 7 7v3.006a1 1 0 0 0 2 0V18a9.01 9.01 0 0 0-9-9Z",
                                }),
                            }),
                            "Responder",
                        ],
                    }),
                    e.jsxs("div", {
                        className: "context-item",
                        onClick: () => ie("Reenviar mensaje"),
                        children: [
                            e.jsxs("svg", {
                                fill: "currentColor",
                                height: "18",
                                viewBox: "0 0 24 24",
                                width: "18",
                                children: [
                                    e.jsx("path", {
                                        d: "M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                    }),
                                    e.jsx("line", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        x1: "7.488",
                                        x2: "15.515",
                                        y1: "12.208",
                                        y2: "7.641",
                                    }),
                                ],
                            }),
                            "Reenviar",
                        ],
                    }),
                    e.jsxs("div", {
                        className: "context-item",
                        onClick: () => ie("baixar"),
                        children: [
                            e.jsxs("svg", {
                                fill: "currentColor",
                                height: "18",
                                viewBox: "0 0 24 24",
                                width: "18",
                                children: [
                                    e.jsx("line", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeMiterlimit: "10",
                                        strokeWidth: "2",
                                        x1: "11.914",
                                        x2: "11.914",
                                        y1: "15.195",
                                        y2: "2",
                                    }),
                                    e.jsx("polyline", {
                                        fill: "none",
                                        points: "16.013 11.095 11.914 15.195 7.814 11.095",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                    }),
                                    e.jsx("line", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeMiterlimit: "10",
                                        strokeWidth: "2",
                                        x1: "3.277",
                                        x2: "20.55",
                                        y1: "22",
                                        y2: "22",
                                    }),
                                ],
                            }),
                            "Descargar",
                        ],
                    }),
                    e.jsxs("div", {
                        className: "context-item",
                        onClick: () => ie("Eliminar mensaje"),
                        children: [
                            e.jsx("svg", {
                                fill: "currentColor",
                                height: "18",
                                viewBox: "0 0 24 24",
                                width: "18",
                                children: e.jsx("path", {
                                    d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                }),
                            }),
                            "Eliminar para ti",
                        ],
                    }),
                    e.jsxs("div", {
                        className: "context-item danger",
                        onClick: () => ie("Denunciar mensaje"),
                        children: [
                            e.jsx("svg", {
                                fill: "currentColor",
                                height: "18",
                                viewBox: "0 0 24 24",
                                width: "18",
                                children: e.jsx("path", {
                                    d: "M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z",
                                }),
                            }),
                            e.jsx("span", {
                                style: { color: "#ed4956" },
                                children: "Denunciar",
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(Re, {
                isOpen: J.isOpen,
                action: J.action,
                onClose: Te,
                onGoToCTA: xe,
            }),
            e.jsx(tt, {
                isVisible: G,
                isDismissing: re,
                label: s.chat.audioVIPMessage,
            }),
            e.jsx(it, {
                isOpen: Y.isOpen,
                imageSrc: Y.imageSrc,
                imageId: Y.imageId,
                onClose: Pe,
                onGoToCTA: xe,
                onShowBlockedPopup: Me,
            }),
            me.isOpen &&
            e.jsxs("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 1e4,
                    background: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "reelFullscreenIn 0.15s ease-out",
                },
                children: [
                    e.jsx("img", {
                        src: me.imageSrc,
                        alt: "",
                        style: { width: "100%", height: "100%", objectFit: "cover" },
                    }),
                    e.jsx("div", {
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "72px",
                            height: "72px",
                            borderRadius: "50%",
                            background: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        children: e.jsx("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 24 24",
                            fill: "white",
                            children: e.jsx("path", { d: "M8 5v14l11-7z" }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function gt({ params: t }) {
    return [
        { title: "STALKEIA APP | Ver Me gusta y actividades del cónyuge" },
        {
            name: "description",
            content:
                "Descubre cómo stalkear un perfil de Instagram y ver sus Me gusta, seguidores y actividades de forma sencilla. Analiza las interacciones y descubre qué sucede en el perfil.",
        },
        {
            name: "keywords",
            content:
                "stalkea, stalkea ai, stalkeia ia, stalkear instagram, ver me gusta instagram, stalkear cónyuge instagram, ver actividades instagram, stalkear perfil instagram",
        },
    ];
}
const ft = Be(function () {
    const { chatId: a } = _e(),
        s = fe(),
        r = parseInt(a || "1", 10),
        c = Ue[r],
        y =
            typeof window < "u" &&
            (window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1");
    return (
        i.useEffect(() => {
            if (localStorage.getItem("cta_timer_expired") === "1") {
                s("/cta");
                return;
            }
        }, [s]),
        i.useEffect(() => {
            async function f() {
                const u =
                    localStorage.getItem("username") ||
                    localStorage.getItem("espionado_username");
                if (!(y || !u))
                    try {
                        const d = await Fe();
                        if (!d || d === "unknown") return;
                        const h = await $e(d, u);
                        if (
                            h.exists &&
                            !h.canSearch &&
                            h.blockReason === "different_handle"
                        ) {
                            if (
                                (console.log("🚫 [CHAT IP CHECK] User blocked:", h.blockReason),
                                    h.leadData?.lastSpiedProfile || h.leadData?.spiedProfile)
                            ) {
                                const x =
                                    h.leadData.lastSpiedProfile || h.leadData.spiedProfile;
                                try {
                                    const T = JSON.parse(
                                        localStorage.getItem("instagram_profile") || "{}",
                                    );
                                    T.username === x?.username &&
                                        Object.assign(x, {
                                            biography: x.biography || T.biography || "",
                                        });
                                } catch { }
                                (localStorage.setItem(
                                    "blocked_previous_profile",
                                    JSON.stringify(x),
                                ),
                                    localStorage.setItem(
                                        "blocked_previous_username",
                                        x?.username || "",
                                    ),
                                    localStorage.setItem("espionado_username", x?.username || ""),
                                    localStorage.setItem("instagram_profile", JSON.stringify(x)));
                            }
                            return;
                        }
                    } catch (d) {
                        console.warn("IP status check failed on chat:", d);
                    }
            }
            f();
        }, [s, y]),
        i.useEffect(() => {
            if (!c) {
                s("/direct");
                return;
            }
            localStorage.getItem("instagram_profile") || s("/");
        }, [c, s]),
        c
            ? e.jsx(ut, { config: c })
            : e.jsx("div", {
                className:
                    "min-h-screen bg-[#0b1014] flex items-center justify-center",
                children: e.jsx("div", {
                    className:
                        "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500",
                }),
            })
    );
});
export { ft as default, gt as meta };
