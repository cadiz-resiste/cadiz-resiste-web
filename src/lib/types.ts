export interface CustomPoint {
    ID:                             number;
    COD_REGISTRO:                   string;
    NOMBRE:                         null | string;
    DESCRIPCION:                    null;
    FEC_INSCRIPCION:                string;
    FEC_INICIO_ACTIVIDAD:           string;
    TIPO_OBJETO:                    TipoObjeto;
    TIPO_OBJETO_ID:                 number;
    GRUPO:                          Grupo;
    CATEGORIA:                      Categoria | null;
    MODALIDAD:                      Modalidad | null;
    ESPECIALIDADES:                 Especialidades;
    DOMICILIO_ESTAB:                string;
    CODIGO_POSTAL:                  string;
    LOCALIDAD:                      Localidad | null;
    ID_MUNICIPIO:                   number;
    MUNICIPIO:                      Municipio;
    ID_PROVINCIA:                   number;
    PROVINCIA:                      Municipio;
    TELEFONO:                       null | string;
    MOVIL:                          null | string;
    FAX:                            null | string;
    CORREO_ELECTRONICO:             null | string;
    TOT_GEN_UA:                     number;
    TOT_GEN_PLAZAS:                 number;
    IND_COMPARTIDA:                 IndCompartida | null;
    IND_TIPO_ALQUILER:              IndTipoAlquiler | null;
    ACTIVIDADES_TURISMO_ACTIVO:     null;
    IND_USO_PRIVADO:                IndCompartida | null;
    NUM_PARCELAS_ACAMPADA:          null;
    NP_PARCELAS_ACAMPADA:           null;
    SUP_ZONA_ACAMPADA:              null;
    NUM_INSTALACIONES_FIJAS:        null;
    NP_INSTALACIONES_FIJAS:         null;
    SUPERFICIE_INSTALACIONES_FIJAS: null;
    TOTAL_PLAZAS_CAMPAMENTO:        null;
    CAPACIDAD_MAXIMA_CAMPAMENTO:    null;
    IND_OFICINA_TUR_INTEGRADA_RED:  IndCompartida | null;
    TITULARIDAD_OFICINA_TURISMO:    null;
    PADRE_ID:                       null;
    IND_ESPECIFICO_ZONAL:           null;
    IND_FIJO_MOVIL:                 null;
    IND_ON_LINE:                    IndCompartida | null;
    URL:                            null | string;
    IDIOMAS:                        null;
    COORD_X:                        null | string;
    COORD_Y:                        null | string;
    SRID:                           null | string;
    FEC_PRESENT_RTADSEG:            null | string;
    ESTADO_PRESENT_RTADSEG:         EstadoPresentRtadseg | null;
    FEC_VERIF_RTADSEG:              null;
    ESTADO_VERIF_RTADSEG:           null;
    RESULT_VERIF_RTADSEG:           null;
    ID_TIPOVIA:                     number | null;
    COD_VIA:                        CodVia | null;
    NOMBRE_VIA:                     string;
    KM:                             null | string;
    CALIF_NUM:                      null | string;
    BLOQUE:                         null | string;
    PORTAL:                         null | string;
    ESCALERA:                       null | string;
    PISO:                           null | string;
    PUERTA:                         null | string;
    REF_CATASTRAL:                  null | string;
    IND_PUB_OPEN_RTA:               IndPubOpenRta;
    COMPLEMENTODOM:                 null | string;
    ID_NUCLEO:                      number | null;
    KM_NUM:                         null | string;
    TIPO_NUMERACION:                IndCompartida | null;
    NUM_DOC_IDENTIFICATIVO:         string;
    TITULAR:                        string;
    GRUPO_ID:                       number;
    CATEGORIA_ID:                   number | null;
    MODALIDAD_ID:                   number | null;
    LISTA_ESPEC:                    Especialidades[] | null;
}

export enum Categoria {
    The1Llave = "1 Llave",
    The2Llaves = "2 Llaves",
    The3Llaves = "3 Llaves",
}

export enum CodVia {
    AV = "AV",
    Al = "AL",
    Ap = "AP",
    Au = "AU",
    Bl = "BL",
    Cj = "CJ",
    Cl = "CL",
    Ed = "ED",
    Gl = "GL",
    PS = "PS",
    Pj = "PJ",
    Pz = "PZ",
}

export enum Especialidades {
    Familiares = "Familiares",
    NoDisponible = "No disponible",
}

export enum EstadoPresentRtadseg {
    Ok = "OK",
}

export enum Grupo {
    Completa = "Completa",
    Conjunto = "Conjunto",
    EdificioComplejo = "Edificio/Complejo",
    PorHabitaciones = "Por habitaciones",
}

export enum IndCompartida {
    K = "K",
    N = "N",
}

export enum IndPubOpenRta {
    S = "S",
}

export enum IndTipoAlquiler {
    C = "C",
    H = "H",
}

export enum Localidad {
    Cadiz = "CADIZ",
}

export enum Modalidad {
    Ciudad = "Ciudad",
    Playa = "Playa",
}

export enum Municipio {
    Cádiz = "CÁDIZ",
}

export enum TipoObjeto {
    ApartamentoTurístico = "Apartamento turístico",
    ViviendaDeUsoTurístico = "Vivienda de uso turístico",
}
