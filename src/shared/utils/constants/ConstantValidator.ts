export class ConstantValidator {
  static SIZE_MIN: number = 5;
  static SIZE_MAX: number = 60;

  static MISSING: string = '.missing';
  static BELOW_MIN_VALUE: string = '.belowMinValue';

  static DUPLICATE: string = 'Esse campo duplicate.';
  static REQUIRED_FIELD: string = 'Esse campo é de preenchimento obrigatório.';
  static REQUIRED_EMAIL: string = 'Favor entrar um email válido.';
  static REQUIRED_EMAIL_EXIST: string = 'já existe em nossa base de dados.';
  static REQUIRED_PRICE_POSITIVO: string = 'Preço deve ser um valor positivo.';
  static REQUIRED_DATA_PRESENT: string =
    'A data do produto não pode ser futura.';
  static REQUIRED_SIZE_MESSAGE: string = 'Deve ter entre 5 e 60 caracteres.';
  static REQUIRED_SIZE_MAX: string = 'Deve ter no maxímo 60 caracteres.';
  static REQUIRED_SIZE_MIN: string = 'Deve ter no minimo 5 caracteres.';

  static REQUIRED_PHONE: string =
    'O campo Telefone deve conter apenas dígitos.';
  static INVALID_EMAIL: string =
    'O endereço usado no campo Email não é um endereço de e-mail válido.';
  static REQUIRED_NUMBER: string =
    'O campo aceitar apenas números positivo e não letras.';
  static REQUIRED_EXIST: string = 'Já existe em nossa base de dados.';
  static NAME_EXIST: string = 'Já existe em nossa base de dados.';
  static INVALID: string = 'invalid format.';
  static ORDER_BY: string = 'orderBy.';

  static MAX_LENGTH: string = ' Campo deve ser menor que ';
  static MIN_LENGTH: string = ' Campo deve ser maior que ';
  static MAX_VALUE: string = ' Campo deve ser menor que ';
  static MIN_VALUE: string = ' Campo deve ser maior que ';
  static MIN_MAX: string = ' Campo deve ter entre 5 e 15 caracteres. ';
  static BETWEEN_LENGTH: string = ' Campo deve ter entre 5 e 15 caracteres. ';

  static INVALID_ORDER_DATE: string = 'Order data inválida. ';
  static IN_THE_PAST: string = ' data no passado. ';
  static EXCEEDS_DURATION: string = ' excede a duração. ';
  static OVERLAPS: string = ' comflito de datas. ';
}
