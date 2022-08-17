--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-08-16 19:11:49 CDT

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
-- TOC entry 214 (class 1259 OID 16473)
-- Name: estado_nota; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estado_nota (
    id_estado_nota integer NOT NULL,
    nombre_estado text
);


ALTER TABLE public.estado_nota OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16472)
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
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 213
-- Name: estado_de_nota_id_estado_nota_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estado_de_nota_id_estado_nota_seq OWNED BY public.estado_nota.id_estado_nota;


--
-- TOC entry 212 (class 1259 OID 16456)
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
-- TOC entry 211 (class 1259 OID 16455)
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
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 211
-- Name: estado_nota_id_nota_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estado_nota_id_nota_seq OWNED BY public.nota.id_nota;


--
-- TOC entry 210 (class 1259 OID 16447)
-- Name: lista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lista (
    id_lista integer NOT NULL,
    nombre_lista text
);


ALTER TABLE public.lista OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16446)
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
-- TOC entry 3604 (class 0 OID 0)
-- Dependencies: 209
-- Name: lista_id_lista_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lista_id_lista_seq OWNED BY public.lista.id_lista;


--
-- TOC entry 3443 (class 2604 OID 16476)
-- Name: estado_nota id_estado_nota; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_nota ALTER COLUMN id_estado_nota SET DEFAULT nextval('public.estado_de_nota_id_estado_nota_seq'::regclass);


--
-- TOC entry 3441 (class 2604 OID 16450)
-- Name: lista id_lista; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista ALTER COLUMN id_lista SET DEFAULT nextval('public.lista_id_lista_seq'::regclass);


--
-- TOC entry 3442 (class 2604 OID 16459)
-- Name: nota id_nota; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota ALTER COLUMN id_nota SET DEFAULT nextval('public.estado_nota_id_nota_seq'::regclass);


--
-- TOC entry 3596 (class 0 OID 16473)
-- Dependencies: 214
-- Data for Name: estado_nota; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.estado_nota VALUES (1, 'PENDIENTE');
INSERT INTO public.estado_nota VALUES (2, 'EN REVISIÓN');
INSERT INTO public.estado_nota VALUES (3, 'TERMINADO');


--
-- TOC entry 3592 (class 0 OID 16447)
-- Dependencies: 210
-- Data for Name: lista; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.lista VALUES (1, 'Compras');
INSERT INTO public.lista VALUES (2, 'Tareas de la escuela');
INSERT INTO public.lista VALUES (3, 'Tasks sprint 45');


--
-- TOC entry 3594 (class 0 OID 16456)
-- Dependencies: 212
-- Data for Name: nota; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.nota VALUES (1, 'Nombre nota', 'esta es una nota', 2, 1, '2022-03-12');
INSERT INTO public.nota VALUES (2, 'Nombre nota', 'esta es una nota', 1, 2, '2022-03-12');
INSERT INTO public.nota VALUES (3, 'Nombre nota', 'esta es una nota', 3, 3, '2022-03-12');
INSERT INTO public.nota VALUES (6, 'Nombre nota', 'esta es una nota', 2, 3, '2022-03-12');


--
-- TOC entry 3605 (class 0 OID 0)
-- Dependencies: 213
-- Name: estado_de_nota_id_estado_nota_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estado_de_nota_id_estado_nota_seq', 3, true);


--
-- TOC entry 3606 (class 0 OID 0)
-- Dependencies: 211
-- Name: estado_nota_id_nota_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estado_nota_id_nota_seq', 6, true);


--
-- TOC entry 3607 (class 0 OID 0)
-- Dependencies: 209
-- Name: lista_id_lista_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lista_id_lista_seq', 3, true);


--
-- TOC entry 3449 (class 2606 OID 16480)
-- Name: estado_nota estado_de_nota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_nota
    ADD CONSTRAINT estado_de_nota_pkey PRIMARY KEY (id_estado_nota);


--
-- TOC entry 3447 (class 2606 OID 16463)
-- Name: nota estado_nota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT estado_nota_pkey PRIMARY KEY (id_nota);


--
-- TOC entry 3445 (class 2606 OID 16454)
-- Name: lista lista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lista
    ADD CONSTRAINT lista_pkey PRIMARY KEY (id_lista);


--
-- TOC entry 3450 (class 2606 OID 16464)
-- Name: nota lista-nota; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT "lista-nota" FOREIGN KEY (id_lista) REFERENCES public.lista(id_lista);


--
-- TOC entry 3451 (class 2606 OID 16481)
-- Name: nota nota_estado_nota; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_estado_nota FOREIGN KEY (id_estado_nota) REFERENCES public.estado_nota(id_estado_nota) NOT VALID;


-- Completed on 2022-08-16 19:11:49 CDT

--
-- PostgreSQL database dump complete
--

