// Interfaces para el comparador de modelos de motos

export interface ModeloMoto {
  id: number;
  nombre: string;
  marca: string;
  nombre_completo: string;
  cilindrada: number;
  imagen: string;
  moto_id: number | null;
}

export interface Modelo {
  id: number;
  nombre: string;
  cilindrada: number;
  nombre_completo: string;
}

export interface Marca {
  id: number;
  nombre: string;
}

export interface MotorSpecs {
  motor: string;
  cilindrada: number;
  potencia: string;
  arranque: string;
  transmision: string;
  capacidad_tanque: number;
}

export interface DimensionesSpecs {
  peso_neto: number;
  carga_util: number;
  peso_bruto: number;
  largo: number;
  ancho: number;
  alto: number;
}

export interface LlantasFrenosSpecs {
  neumatico_delantero: string;
  neumatico_posterior: string;
  freno_delantero: string;
  freno_posterior: string;
}

export interface AdicionalesSpecs {
  cargador_usb: boolean;
  luz_led: boolean;
  alarma: boolean;
  cajuela: boolean;
  tablero_led: boolean;
  mp3: boolean;
  bluetooth: boolean;
}

export interface Specs {
  motor: MotorSpecs;
  dimensiones: DimensionesSpecs;
  llantas_frenos: LlantasFrenosSpecs;
  adicionales: AdicionalesSpecs;
}

export interface Moto {
  id: number;
  modelo: Modelo;
  marca: Marca;
  tipo: string | null;
  imagen: string;
  color: string;
  precio_base: number;
  año: number;
  specs: Specs;
}

export interface ImagenMoto {
  id_moto: number;
  modelo_id: number;
  modelo_nombre: string;
  imagen: string;
  color: string;
}

export interface EspecificacionBateria {
  id_moto: number;
  modelo_nombre: string;
  potencia_bateria: string;
  tipo_bateria: string;
  bateria_extraible: string;
  vida_util: string;
  tipo_tomacorriente: string;
  tiempo_carga: string;
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  message?: string;
  error?: string;
}
