import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  protected constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery);
  }

  async create(createEntityData: unknown): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return entity.save();
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }
}
