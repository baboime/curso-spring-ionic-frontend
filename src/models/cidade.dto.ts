import { asPureExpressionData } from "@angular/core/src/view";
import { EstadoService } from "../services/domain/estado.service";
import { EstadoDTO } from "./estado.dto";

export interface CidadeDTO {
    id : string;
    nome : string;
    estado? : EstadoDTO;
}