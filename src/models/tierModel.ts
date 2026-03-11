import { DataTypes, Model } from 'sequelize';
import { connection } from '../connection/connection';

export class Tier extends Model {
  public id_tier!: number;
  public nombre_tier!: string;
}

Tier.init({
  id_tier: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre_tier: { 
    type: DataTypes.STRING, 
    allowNull: false 
  }
}, {
  sequelize: connection,
  tableName: 'tiers',
  timestamps: false // No ocupamos fechas para los niveles
});

export default Tier;