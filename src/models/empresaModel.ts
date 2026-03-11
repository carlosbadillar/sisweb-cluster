import { DataTypes, Model } from 'sequelize';
import { connection } from '../connection/connection';
import Tier from './tierModel'; // Importamos al "papá"

export class Empresa extends Model {
  public id_empresa!: number;
  public nombre_empresa!: string;
  public correo_electronico!: string;
  public tier_id!: number;
}

Empresa.init({
  id_empresa: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre_empresa: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  correo_electronico: { 
    type: DataTypes.STRING 
  },
  tier_id: { 
    type: DataTypes.INTEGER,
    references: {
      model: Tier,
      key: 'id_tier'
    }
  }
}, {
  sequelize: connection,
  tableName: 'empresas',
  timestamps: false
});

// ESTO ES LO QUE PIDIÓ EL PROFE: La relación 1 a Muchos
// Una Empresa pertenece a un Tier
Empresa.belongsTo(Tier, { foreignKey: 'tier_id', as: 'nivel' });
// Un Tier tiene muchas Empresas
Tier.hasMany(Empresa, { foreignKey: 'tier_id', as: 'empresas' });

export default Empresa;