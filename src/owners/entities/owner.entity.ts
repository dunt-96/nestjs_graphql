import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pet } from 'src/pets/entities/pet.entity';
import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field(() => [Pet], { nullable: true })
  pets?: Pet[];
}
