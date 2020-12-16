export default class Content {
  private temperatura: string = "0";
  private luminosidade: string = "0";
  private umidade: string = "0";
  private status_buzzer: boolean = false;
  private tempMax: string = "0";
  private tempMin: string = "0";
  private umidMax: string = "0";
  private umidMin: string = "0";
  private lumMax: string = "0";
  private lumMin: string = "0";
  private current_color: string = "0";

  constructor(
    $temperatura: string,
    $luminosidade: string,
    $umidade: string,
    $status_buzzer: boolean,
    $tempMax: string,
    $tempMin: string,
    $umidMax: string,
    $umidMin: string,
    $lumMax: string,
    $lumMin: string,
    $current_color: string
  ) {

    this.temperatura = $temperatura;
    this.luminosidade = $luminosidade;
    this.umidade = $umidade;
    this.status_buzzer = $status_buzzer;
    this.tempMax = $tempMax;
    this.tempMin = $tempMin;
    this.umidMax = $umidMax;
    this.umidMin = $umidMin;
    this.lumMax = $lumMax;
    this.lumMin = $lumMin;
    this.current_color = $current_color;
  }

  /**
   * Getter $temperatura
   * @return {string }
   */
  public get $temperatura(): string {
    return this.temperatura;
  }

  /**
   * Getter $luminosidade
   * @return {string }
   */
  public get $luminosidade(): string {
    return this.luminosidade;
  }

  /**
   * Getter $umidade
   * @return {string }
   */
  public get $umidade(): string {
    return this.umidade;
  }

  /**
   * Getter $status_buzzer
   * @return {boolean }
   */
  public get $status_buzzer(): boolean {
    return this.status_buzzer;
  }

  /**
   * Getter $tempMax
   * @return {string }
   */
  public get $tempMax(): string {
    return this.tempMax;
  }

  /**
   * Getter $tempMin
   * @return {string }
   */
  public get $tempMin(): string {
    return this.tempMin;
  }

  /**
   * Getter $umidMax
   * @return {string }
   */
  public get $umidMax(): string {
    return this.umidMax;
  }

  /**
   * Getter $umidMin
   * @return {string }
   */
  public get $umidMin(): string {
    return this.umidMin;
  }

  /**
   * Getter $lumMax
   * @return {string }
   */
  public get $lumMax(): string {
    return this.lumMax;
  }

  /**
   * Getter $lumMin
   * @return {string }
   */
  public get $lumMin(): string {
    return this.lumMin;
  }

  /**
   * Getter $current_color
   * @return {string }
   */
  public get $current_color(): string {
    return this.current_color;
  }

  /**
   * Setter $temperatura
   * @param {string } value
   */
  public set $temperatura(value: string) {
    this.temperatura = value;
  }

  /**
   * Setter $luminosidade
   * @param {string } value
   */
  public set $luminosidade(value: string) {
    this.luminosidade = value;
  }

  /**
   * Setter $umidade
   * @param {string } value
   */
  public set $umidade(value: string) {
    this.umidade = value;
  }

  /**
   * Setter $status_buzzer
   * @param {boolean } value
   */
  public set $status_buzzer(value: boolean) {
    this.status_buzzer = value;
  }

  /**
   * Setter $tempMax
   * @param {string } value
   */
  public set $tempMax(value: string) {
    this.tempMax = value;
  }

  /**
   * Setter $tempMin
   * @param {string } value
   */
  public set $tempMin(value: string) {
    this.tempMin = value;
  }

  /**
   * Setter $umidMax
   * @param {string } value
   */
  public set $umidMax(value: string) {
    this.umidMax = value;
  }

  /**
   * Setter $umidMin
   * @param {string } value
   */
  public set $umidMin(value: string) {
    this.umidMin = value;
  }

  /**
   * Setter $lumMax
   * @param {string } value
   */
  public set $lumMax(value: string) {
    this.lumMax = value;
  }

  /**
   * Setter $lumMin
   * @param {string } value
   */
  public set $lumMin(value: string) {
    this.lumMin = value;
  }

  /**
   * Setter $current_color
   * @param {string } value
   */
  public set $current_color(value: string) {
    this.current_color = value;
  }
}
