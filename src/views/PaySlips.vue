<template>
 <div>
  <v-container> 
    <h1 class="heading pl-4 pb-4">My Payslips</h1> 
    <div class="text-right custom-position">
      <v-avatar size="20px" class="salary-button">
      <v-img src="/assets/salary.svg"></v-img>
    </v-avatar>
    </div>
   
  <v-card
    class="mx-auto"
  >
  <v-card-title>EUR (6)</v-card-title>
    <v-card-text>
      <v-table
        fixed-header
        height="600px"
      >
        <thead>
          <tr>
            <th class="text-left table-heading-text">No</th>
            <th class="text-left table-heading-text">Month</th>
            <th class="text-left table-heading-text">Payslips</th>
            <th class="text-left table-heading-text">Gross Salary</th>
            <th class="text-left table-heading-text">Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item,index) in items"
            :key="item.name"
          >
            <td class="table-data-text">{{ index+1 }}</td>
            <td class="primary-color table-data-text cursor-pointer">{{ getDate(item.payrollDate)}}</td>
            <td class="table-data-text">{{ item.fileAttachment.file.label }}</td>
            <template v-for="(entry, index) in item.payslipEntries" :key="index">
                <td class="table-data-text" v-if="entry.key === 'GROSS' "> {{ entry.amount  }} {{ entry.currency }} </td>
            </template>
            <template v-for="(entry, index) in item.payslipEntries" :key="index">
                <td class="table-data-text" v-if="entry.key === 'NET PAY' "> {{ entry.amount  }} {{ entry.currency }} </td>
            </template>
          
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>  
 
</v-container>
 </div>
</template>
<script setup>
  import { ref} from 'vue';
  import Payslips from '@/constant/payslips';    
  import moment from 'moment';
  const items = ref(Payslips);
  function getDate(date) {
    return moment(date).format('MMMM YYYY');
    }
 </script>
<style scoped>
.heading{
  font: normal normal bold 24px/35px Source Sans Pro;
  letter-spacing: 0px;
  color: #001738;
  opacity: 1;
  font-weight: bold;
  font-size:24px !important;
}
.primary-color{
  color:#FC6541;
}
.table-data-text{
  font: normal normal  14px/35px Source Sans Pro;
}
.table-heading-text{
  font: normal normal bold 12px/35px Source Sans Pro;
}
.v-card-title{
  background: #001738 0% 0% no-repeat padding-box;
  border-radius: 8px 30px 30px 8px;
  opacity: 1;
  border-radius: 8px 30px 30px 8px;
  font: normal normal bold 14px/18px Source Sans Pro;
  letter-spacing: 0px;
  color: #FFFFFF;
}
.cursor-pointer{
  cursor: pointer;
}
.custom-position{
  position:relative;
}
.salary-button{
    position: absolute;
    top: 57px;
    z-index: 1;
    top: 57px;
    right: -9px;
    z-index: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    position: absolute;
    border-radius: 50px;
    display: flex;
    flex-wrap: wrap;
    height: 40px !important;
    border: 1px;
    cursor: pointer;
}
</style>