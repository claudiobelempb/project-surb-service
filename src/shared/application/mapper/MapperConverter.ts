abstract class MapperConverter<E, T> {
  public abstract toResponse(entity: E): T;
  public abstract toEntity(response: Object): E;
  public abstract toCreateResponse(entity: E): T;
  public abstract toCreateEntity(response: Object): E;
  public abstract fromUpdateDTO(entity: E): T;
  public abstract toUpdateEntity(response: Object): E;
}
