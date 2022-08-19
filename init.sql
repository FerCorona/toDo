--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.1

-- Started on 2022-08-19 10:55:20 CDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16384)
-- Name: estado_nota; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estado_nota (
    id_estado_nota integer NOT NULL,
    nombre_estado text
);


ALTER TABLE public.estado_nota OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16389)
-- Name: estado_de_nota_id_estado_nota_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estado_de_nota_id_estado_nota_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.estado_de_nota_id_estado_nota_seq OWNER TO postgres;

--
-- TOC entry 3351 (class 0 OID 0)
-- Dependencies: 210
-- Name: estado_de_nota_id_estado_nota_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estado_de_nota_id_estado_nota_seq OWNED BY public.estado_nota.id_estado_nota;


--
-- TOC entry 211 (class 1259 OID 16390)
-- Name: nota; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota (
    id_nota integer NOT NULL,
    nombre_nota text,
    desc_nota text,
    id_estado_nota integer,
    id_lista integer,
    fecha date
);


ALTER TABLE public.nota OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16395)
-- Name: estado_nota_id_nota_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estado_nota_id_nota_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.estado_nota_id_nota_seq OWNER TO postgres;

--
-- TOC entry 3352 (class 0 OID 0)
-- Dependencies: 212
-- Name: estado_nota_id_nota_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estado_nota_id_nota_seq OWNED BY public.nota.id_nota;


--
-- TOC entry 213 (class 1259 OID 16396)
-- Name: lista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lista (
    id_lista integer NOT NULL,
    nombre_lista text,
    id_user integer
);


ALTER TABLE public.lista OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16401)
-- Name: lista_id_lista_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lista_id_lista_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lista_id_lista_seq OWNER TO postgres;

--
-- TOC entry 3353 (class 0 OID 0)
-- Dependencies: 214
-- Name: lista_id_lista_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lista_id_lista_seq OWNED BY public.lista.id_lista;


--
-- TOC entry 216 (class 1259 OID 16422)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_user integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16421)
-- Name: user_id_user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_user_seq OWNER TO postgres;

--
-- TOC entry 3354 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_user_seq OWNED BY public.usuario.id_user;


--
-- TOC entry 3182 (class 2604 OID 16402)
-- Name: estado_nota id_estado_nota; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_nota ALTER COLUMN id_estado_nota SET DEFAULT nextval('public.estado_de_nota_id_estado_nota_seq'::regclass);


--
-- TOC entry 3184 (class 2604 OID 16403)
-- Name: lista id_lista; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista ALTER COLUMN id_lista SET DEFAULT nextval('public.lista_id_lista_seq'::regclass);


--
-- TOC entry 3183 (class 2604 OID 16404)
-- Name: nota id_nota; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota ALTER COLUMN id_nota SET DEFAULT nextval('public.estado_nota_id_nota_seq'::regclass);


--
-- TOC entry 3185 (class 2604 OID 16425)
-- Name: usuario id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_user SET DEFAULT nextval('public.user_id_user_seq'::regclass);


--
-- TOC entry 3338 (class 0 OID 16384)
-- Dependencies: 209
-- Data for Name: estado_nota; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.estado_nota VALUES (1, 'PENDIENTE');
INSERT INTO public.estado_nota VALUES (2, 'EN REVISIÓN');
INSERT INTO public.estado_nota VALUES (3, 'TERMINADO');


--
-- TOC entry 3342 (class 0 OID 16396)
-- Dependencies: 213
-- Data for Name: lista; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.lista VALUES (1, 'Compras', 1);
INSERT INTO public.lista VALUES (2, 'Tareas de la escuela', 1);
INSERT INTO public.lista VALUES (3, 'Tasks sprint 45', 1);
INSERT INTO public.lista VALUES (4, 'prueba', 1);


--
-- TOC entry 3340 (class 0 OID 16390)
-- Dependencies: 211
-- Data for Name: nota; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.nota VALUES (3, 'Nombre nota', 'esta es una nota', 3, 3, '2022-03-12');
INSERT INTO public.nota VALUES (6, 'Nombre nota', 'esta es una nota', 2, 3, '2022-03-12');
INSERT INTO public.nota VALUES (1, 'Nombre nota', 'esta es una nota', 1, 1, '2022-03-12');
INSERT INTO public.nota VALUES (2, 'Nombre nota', 'esta es una nota', 2, 2, '2022-03-12');


--
-- TOC entry 3345 (class 0 OID 16422)
-- Dependencies: 216
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario VALUES (1, 'user1', 'qwerty1234');


--
-- TOC entry 3355 (class 0 OID 0)
-- Dependencies: 210
-- Name: estado_de_nota_id_estado_nota_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estado_de_nota_id_estado_nota_seq', 3, true);


--
-- TOC entry 3356 (class 0 OID 0)
-- Dependencies: 212
-- Name: estado_nota_id_nota_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estado_nota_id_nota_seq', 6, true);


--
-- TOC entry 3357 (class 0 OID 0)
-- Dependencies: 214
-- Name: lista_id_lista_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lista_id_lista_seq', 4, true);


--
-- TOC entry 3358 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_user_seq', 2, true);


--
-- TOC entry 3187 (class 2606 OID 16406)
-- Name: estado_nota estado_de_nota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_nota
    ADD CONSTRAINT estado_de_nota_pkey PRIMARY KEY (id_estado_nota);


--
-- TOC entry 3189 (class 2606 OID 16408)
-- Name: nota estado_nota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT estado_nota_pkey PRIMARY KEY (id_nota);


--
-- TOC entry 3191 (class 2606 OID 16410)
-- Name: lista lista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista
    ADD CONSTRAINT lista_pkey PRIMARY KEY (id_lista);


--
-- TOC entry 3193 (class 2606 OID 16431)
-- Name: usuario unique_username; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT unique_username UNIQUE (username);


--
-- TOC entry 3195 (class 2606 OID 16429)
-- Name: usuario user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);


--
-- TOC entry 3198 (class 2606 OID 16432)
-- Name: lista id_user_lista; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista
    ADD CONSTRAINT id_user_lista FOREIGN KEY (id_user) REFERENCES public.usuario(id_user) NOT VALID;


--
-- TOC entry 3196 (class 2606 OID 16411)
-- Name: nota lista-nota; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT "lista-nota" FOREIGN KEY (id_lista) REFERENCES public.lista(id_lista);


--
-- TOC entry 3197 (class 2606 OID 16416)
-- Name: nota nota_estado_nota; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_estado_nota FOREIGN KEY (id_estado_nota) REFERENCES public.estado_nota(id_estado_nota) NOT VALID;


-- Completed on 2022-08-19 10:55:20 CDT

--
-- PostgreSQL database dump complete
--

